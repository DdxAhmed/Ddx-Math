import { useLocation } from "wouter";
import { lessons } from "@/data/lessons";
import { resources } from "@/data/resources";
import { useProgress } from "@/hooks/useProgress";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, FileText } from "lucide-react";

export function Sidebar() {
  const [location] = useLocation();
  const { completedLessons } = useProgress();

  const isLessons = location.startsWith("/lessons");
  const isResources = location.startsWith("/resources");

  const chapters = Array.from(new Set(lessons.map(l => l.chapter)));

  const totalLessons = lessons.length;
  const completedCount = completedLessons.size;
  const progressPercent = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="flex flex-col h-full py-6">
      <div className="px-6 mb-8">
        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Your Progress</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Course Completion</span>
            <span className="font-medium text-primary">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">
            {completedCount} of {totalLessons} lessons completed
          </p>
        </div>
      </div>

      <ScrollArea className="flex-1 px-4">
        <div className="space-y-6 px-2">
          <div>
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Chapters
            </h4>
            <div className="space-y-1">
              {chapters.map(chapter => {
                const chapterLessons = lessons.filter(l => l.chapter === chapter);
                const chapterCompleted = chapterLessons.filter(l => completedLessons.has(l.id)).length;
                return (
                  <div key={chapter} className="flex flex-col gap-1 py-1">
                    <div className="text-sm font-medium text-foreground">{chapter}</div>
                    <div className="text-xs text-muted-foreground">
                      {chapterCompleted}/{chapterLessons.length} completed
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}