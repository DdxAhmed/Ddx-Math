import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedLessons } from "@/components/home/FeaturedLessons";
import { LatestResources } from "@/components/home/LatestResources";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <StatsSection />
        <FeaturedLessons />
        <LatestResources />
        
        <footer className="py-12 border-t border-border/40 bg-muted/20 text-center text-muted-foreground">
          <div className="container px-4">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-xs">
                ∫
              </div>
              <span className="font-bold text-foreground">DdxMath</span>
            </div>
            <p className="text-sm">A centralized learning hub for mathematics students.</p>
            <p className="text-xs text-muted-foreground/60 mt-2">Powered by DdxAhmed</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}