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
            <p className="text-xs text-muted-foreground/60 mt-2">Powered by DdxAhmed</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}