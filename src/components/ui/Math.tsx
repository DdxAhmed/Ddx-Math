import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import renderMathInElement from "katex/contrib/auto-render";

interface MathProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

/**
 * Parses a string containing mixed Markdown and LaTeX math delimiters,
 * renders the HTML structure, and applies KaTeX render to the DOM tree.
 */
function renderMarkdownAndMath(element: HTMLElement, rawText: string) {
  const mathBlocks: string[] = [];
  
  // Regex to match math delimiters:
  // 1. $$ ... $$
  // 2. $ ... $
  // 3. \[ ... \]
  // 4. \( ... \)
  const combinedRegex = /(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;

  // Replace math blocks with placeholders to isolate them from Markdown parsing
  let textWithPlaceholders = rawText.replace(combinedRegex, (match) => {
    const placeholder = `___MATH_PLACEHOLDER_${mathBlocks.length}___`;
    mathBlocks.push(match);
    return placeholder;
  });

  // Escape HTML characters in the plain text part to prevent HTML injection
  let html = textWithPlaceholders
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold formatting: **text**
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic formatting: *text*
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Inline code block formatting: `code`
  html = html.replace(/`(.*?)`/g, "<code class='px-1.5 py-0.5 bg-muted rounded font-mono text-xs text-violet-600 dark:text-violet-400'>$1</code>");

  // Headers formatting: ###, ##, #
  html = html.replace(/^### (.*?)$/gm, '<h4 class="text-sm md:text-base font-bold text-violet-600 dark:text-violet-400 mt-3 mb-1.5">$1</h4>');
  html = html.replace(/^## (.*?)$/gm, '<h3 class="text-base md:text-lg font-bold text-foreground mt-4 mb-2">$1</h3>');
  html = html.replace(/^# (.*?)$/gm, '<h2 class="text-lg md:text-xl font-bold text-foreground mt-5 mb-2.5">$1</h2>');

  // Bullet points parsing (lines starting with - or *)
  const lines = html.split("\n");
  let inList = false;
  const processedLines = lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const content = trimmed.substring(2);
      let prefix = "";
      if (!inList) {
        inList = true;
        prefix = '<ul class="list-disc pl-5 my-2 space-y-1 text-foreground/90">';
      }
      return `${prefix}<li class="text-sm md:text-base">${content}</li>`;
    } else {
      let suffix = "";
      if (inList) {
        inList = false;
        suffix = "</ul>";
      }
      return `${suffix}${line}`;
    }
  });

  if (inList) {
    processedLines.push("</ul>");
  }

  // Convert remaining newlines to line breaks and clean up duplicates
  let finalHtml = processedLines.join("\n").replace(/\n/g, "<br />");
  finalHtml = finalHtml.replace(/(<br \/>){3,}/g, "<br /><br />");

  // Restore the math blocks into their safe placeholders
  for (let i = 0; i < mathBlocks.length; i++) {
    finalHtml = finalHtml.replace(`___MATH_PLACEHOLDER_${i}___`, mathBlocks[i]);
  }

  // Update innerHTML
  element.innerHTML = finalHtml;

  // Render Math equations in the DOM node
  renderMathInElement(element, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    throwOnError: false,
  });
}

export function MathRenderer({ formula, displayMode = false, className = "" }: MathProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";

      const hasDelimiters = formula.includes("$") || formula.includes("\\(") || formula.includes("\\[");
      
      // Determine if the string is a pure math formula or contains text descriptions
      const hasArabic = /[\u0600-\u06FF]/.test(formula);
      const hasEnglishWords = /[a-zA-Z]{3,}\s+[a-zA-Z]{3,}/.test(formula);
      
      const isPureMath = !hasDelimiters && !hasArabic && !hasEnglishWords && (
        displayMode ||
        formula.includes("\\") || 
        formula.includes("_") || 
        formula.includes("^") || 
        formula.includes("{") ||
        formula.includes("}") ||
        (!formula.includes(" ") && (formula.includes("=") || formula.includes("+") || formula.includes("-")))
      );

      if (hasDelimiters) {
        try {
          renderMarkdownAndMath(containerRef.current, formula);
        } catch (err) {
          console.error("MathRenderer custom parser error:", err);
          containerRef.current.textContent = formula;
        }
      } else if (isPureMath) {
        // Pure math equation rendering
        try {
          const html = katex.renderToString(formula, {
            displayMode,
            throwOnError: false,
          });
          containerRef.current.innerHTML = html;
        } catch (err) {
          console.error("KaTeX renderToString error:", err);
          containerRef.current.textContent = formula;
        }
      } else {
        // Plain text or markdown description rendering
        try {
          renderMarkdownAndMath(containerRef.current, formula);
        } catch (err) {
          containerRef.current.textContent = formula;
        }
      }
    }
  }, [formula, displayMode]);

  return (
    <span 
      ref={containerRef} 
      className={className} 
      style={{ display: displayMode ? "block" : "inline-block" }} 
    />
  );
}
