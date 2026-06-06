import { useState } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { ResourceGrid } from "@/components/resources/ResourceGrid";
import { resources } from "@/data/resources";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = ["all", "Midterms", "Questions", "By Mohamed Mosaad", "By Rahaf", "Videos"];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "all" || resource.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition className="container max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Study Resources</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Download lecture slides, PDFs, past exams, and assignments to supplement your learning.
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
                      layoutId="activeResourceTabIndicator"
                      className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat === "all" ? "All Resources" : cat}
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
            placeholder="Search study resources by title..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-11 bg-card border-border/50 rounded-xl focus-visible:ring-primary"
          />
        </div>
      </div>

      <ResourceGrid resources={filteredResources} />
    </PageTransition>
  );
}