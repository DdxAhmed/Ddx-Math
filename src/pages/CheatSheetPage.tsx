import { useState } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { formulas, Formula } from "@/data/formulas";
import { MathRenderer } from "@/components/ui/Math";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Copy, Check, Info, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/useSEO";

export default function CheatSheetPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { toast } = useToast();

  useSEO({
    title: "Interactive Cheat Sheet",
    description: "Access and copy standard math formulas for limits, derivatives, integration, sequences, and differential equations instantly.",
    keywords: "math formulas, integral cheat sheet, derivative rules, latex formulas, math sheet",
  });

  const categories = ["all", "Limits", "Derivatives", "Integrals", "Series & Sequences", "ODEs", "Partial Fractions"];

  const handleCopy = (formulaObj: Formula) => {
    navigator.clipboard.writeText(formulaObj.formula);
    setCopiedId(formulaObj.id);
    toast({
      title: "LaTeX Copied",
      description: `Copied "${formulaObj.name}" formula to clipboard.`,
    });
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFormulas = formulas.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || 
                          f.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "all" || f.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition className="container max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Interactive Cheat Sheet</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Quickly search and lookup vital formulas. Copy LaTeX codes directly and view illustrative examples on how to apply them.
        </p>
      </div>

      <div className="flex flex-col gap-6 mb-8">
        {/* Navigation Tabs for Categories */}
        <div className="flex justify-start items-center overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="flex bg-muted/30 p-1.5 rounded-xl border border-border/40 backdrop-blur-sm gap-1.5 w-full sm:w-auto min-w-max">
            {categories.map((cat) => {
              const isActive = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 focus-visible:outline-none ${
                    isActive 
                      ? "text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCheatSheetTabIndicator"
                      className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat === "all" ? "All Formulas" : cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search formulas by name or description..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-11 bg-card border-border/50 rounded-xl focus-visible:ring-primary"
          />
        </div>
      </div>

      {filteredFormulas.length === 0 ? (
        <div className="text-center py-12 px-4 border border-dashed rounded-xl border-border/60 bg-muted/20">
          <h3 className="text-lg font-semibold mb-2">No formulas found</h3>
          <p className="text-muted-foreground text-sm">Try adjusting your filters or search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFormulas.map((f, idx) => {
            const isCopied = copiedId === f.id;
            const isExpanded = expandedId === f.id;

            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Card className="group h-full flex flex-col justify-between border-border/50 bg-card hover:shadow-md hover:border-primary/20 transition-all duration-200">
                  <div>
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                      <div>
                        <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">{f.category}</span>
                        <CardTitle className="text-lg font-bold mt-1">{f.name}</CardTitle>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-muted-foreground hover:text-primary rounded-lg"
                        onClick={() => handleCopy(f)}
                        title="Copy LaTeX formula"
                      >
                        {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Formatted formula block */}
                      <div className="p-4 bg-muted/40 rounded-xl border border-border/30 overflow-x-auto text-center flex items-center justify-center min-h-[70px]">
                        <MathRenderer formula={f.formula} displayMode={true} className="text-foreground font-mono text-base md:text-lg" />
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        <MathRenderer formula={f.description} />
                      </div>
                    </CardContent>
                  </div>

                  <div className="border-t border-border/30 p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(f.id)}
                      className="w-full gap-2 text-xs font-semibold hover:bg-muted/40 hover:text-primary rounded-lg justify-center h-9"
                    >
                      <HelpCircle className="h-4 w-4" /> 
                      {isExpanded ? "Hide Example" : "Show Example"}
                    </Button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden mt-3 bg-muted/20 border border-border/40 rounded-xl p-3.5 space-y-2"
                        >
                          <span className="block text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Example Application</span>
                          <div className="text-sm font-mono overflow-x-auto">
                            <MathRenderer formula={f.examples} displayMode={true} className="text-primary" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </PageTransition>
  );
}
