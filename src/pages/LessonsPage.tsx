import { useState } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { LessonGrid } from "@/components/lessons/LessonGrid";
import { lessons } from "@/data/lessons";
import { motion } from "framer-motion";

import { useSEO } from "@/hooks/useSEO";

export default function LessonsPage() {
  const [subjectFilter, setSubjectFilter] = useState<string>("Math 2");
  
  useSEO({
    title: "Lessons",
    description: "Browse our structured mathematics video lectures across Math 1, Math 2, Math 3, and Math 4 courses.",
    keywords: "math lectures, video lessons, mathematics, calculus lectures, algebra lessons, university math",
  });

  const subjects = ["Math 1", "Math 2", "Math 3", "Math 4"];

  const filteredLessons = lessons.filter(lesson => {
    return lesson.subject === subjectFilter;
  });

  return (
    <PageTransition className="container max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Video Lessons</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore our comprehensive library of mathematics lectures. Filter by subject to find exactly what you need.
        </p>
      </div>

      <div className="flex flex-col gap-6 mb-8">
        {/* Navigation Tabs for Subjects */}
        <div className="flex justify-start items-center overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="flex bg-muted/30 p-1.5 rounded-xl border border-border/40 backdrop-blur-sm gap-1.5 w-full sm:w-auto min-w-max">
            {subjects.map((s) => {
              const isActive = subjectFilter === s;
              return (
                <button
                  key={s}
                  onClick={() => setSubjectFilter(s)}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 focus-visible:outline-none ${
                    isActive 
                      ? "text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">
                    {s}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {subjectFilter === "Math 2" ? (
        <LessonGrid lessons={filteredLessons} />
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center py-20 px-4 text-center bg-card border border-border/50 rounded-2xl shadow-lg max-w-md mx-auto mt-8"
        >
          <span className="text-6xl mb-6 select-none animate-bounce">😢</span>
          <h2 className="text-3xl font-extrabold text-foreground mb-3 font-mono">مفيش محتوى</h2>
          <p className="text-xl text-primary font-bold tracking-wide animate-pulse">ويارب ننجح 🤲🎓</p>
        </motion.div>
      )}
    </PageTransition>
  );
}