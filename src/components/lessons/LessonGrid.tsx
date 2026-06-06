import { Lesson } from "@/data/lessons";
import { LessonCard } from "./LessonCard";

export function LessonGrid({ lessons }: { lessons: Lesson[] }) {
  if (lessons.length === 0) {
    return (
      <div className="text-center py-12 px-4 border border-dashed rounded-xl border-border/60 bg-muted/20">
        <h3 className="text-lg font-semibold mb-2">No lessons found</h3>
        <p className="text-muted-foreground text-sm">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {lessons.map((lesson, idx) => (
        <LessonCard key={lesson.id} lesson={lesson} index={idx} />
      ))}
    </div>
  );
}