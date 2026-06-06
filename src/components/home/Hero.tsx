import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import katex from "katex";
import { useEffect, useRef } from "react";
import { PlayCircle, Library } from "lucide-react";

export function Hero() {
  const mathRef1 = useRef<HTMLSpanElement>(null);
  const mathRef2 = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (mathRef1.current) {
      mathRef1.current.innerHTML = katex.renderToString("\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}", { displayMode: true, throwOnError: false });
    }
    if (mathRef2.current) {
      mathRef2.current.innerHTML = katex.renderToString("\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}", { displayMode: true, throwOnError: false });
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50 translate-x-1/2"></div>
      
      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                v1.0 Now Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Your Complete <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">Mathematics</span> <br />
                Learning Hub.
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
                Master complex mathematical concepts with high-quality video lectures, comprehensive study materials, and a personalized tracking system.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lessons">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all rounded-full gap-2">
                  <PlayCircle className="h-5 w-5" /> Start Learning
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full gap-2 border-border/80 bg-background/50 backdrop-blur-sm">
                  <Library className="h-5 w-5" /> Browse Resources
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105 blur-lg"></div>
            <div className="relative bg-card border border-border/60 rounded-3xl p-8 shadow-2xl glass">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs font-mono text-muted-foreground">math_vault_preview.tex</div>
              </div>
              <div className="space-y-8 font-mono text-lg opacity-80">
                <div className="p-4 bg-muted/30 rounded-xl overflow-hidden text-center text-xl">
                  <span ref={mathRef1} className="katex-display-wrapper block text-foreground"></span>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl overflow-hidden text-center text-xl">
                  <span ref={mathRef2} className="katex-display-wrapper block text-foreground"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}