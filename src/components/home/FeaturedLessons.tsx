import { LessonGrid } from "../lessons/LessonGrid";
import { lessons } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function FeaturedLessons() {
  // Get a mix of difficulties for featured
  const featured = [
    lessons.find(l => l.difficulty === "Beginner"),
    lessons.find(l => l.difficulty === "Intermediate"),
    lessons.find(l => l.difficulty === "Advanced"),
    lessons.find(l => l.chapter === "Calculus I" && l.id !== "calc1-01"),
  ].filter(Boolean) as typeof lessons;

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Lessons</h2>
            <p className="text-muted-foreground text-lg">Hand-picked lectures to start your journey.</p>
          </div>
          <Link href="/lessons">
            <Button variant="ghost" className="gap-2 group">
              View All Lessons <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <LessonGrid lessons={featured} />
      </div>
    </section>
  );
}