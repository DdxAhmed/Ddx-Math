import { ResourceGrid } from "../resources/ResourceGrid";
import { resources } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function LatestResources() {
  // Grab a mix of different types
  const latest = [
    resources.find(r => r.type === "PDF"),
    resources.find(r => r.type === "Slides"),
    resources.find(r => r.type === "Assignment"),
    resources.find(r => r.type === "Exam"),
    resources.find(r => r.type === "Solution"),
    resources.find(r => r.chapter === "Calculus I"),
  ].filter((r, i, self) => r && self.findIndex(t => t?.id === r.id) === i).slice(0, 6) as typeof resources;

  return (
    <section className="py-20 bg-muted/10 border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Latest Resources</h2>
            <p className="text-muted-foreground text-lg">Downloadable materials to supplement your study.</p>
          </div>
          <Link href="/resources">
            <Button variant="ghost" className="gap-2 group">
              View All Resources <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <ResourceGrid resources={latest} />
      </div>
    </section>
  );
}