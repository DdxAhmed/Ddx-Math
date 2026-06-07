import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

export function MathRenderer({ formula, displayMode = false, className = "" }: MathProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        containerRef.current.innerHTML = katex.renderToString(formula, {
          displayMode,
          throwOnError: false,
        });
      } catch (err) {
        containerRef.current.textContent = formula;
      }
    }
  }, [formula, displayMode]);

  return <span ref={containerRef} className={className} />;
}
