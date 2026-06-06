import { useRoute, Link, useLocation } from "wouter";
import { lessons } from "@/data/lessons";
import { resources } from "@/data/resources";
import { PageTransition } from "@/components/layout/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useProgress } from "@/hooks/useProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ArrowLeft, CheckCircle2, Circle, Heart, Play, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import katex from "katex";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { useToast } from "@/hooks/use-toast";

export default function LessonDetailPage() {
  const [match, params] = useRoute("/lessons/:id");
  const [, setLocation] = useLocation();
  const id = params?.id;
  
  const lesson = lessons.find(l => l.id === id);
  const { completedLessons, favoriteLessons, toggleComplete, toggleFavorite, addRecentlyViewed } = useProgress();
  const [notes, setNotes] = useLocalStorage<string>(`mv_notes_${id}`, "");
  const { toast } = useToast();
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (id) addRecentlyViewed(id);
  }, [id, addRecentlyViewed]);

  useEffect(() => {
    if (descRef.current && lesson) {
      // Basic katex rendering if any inline math is found e.g., $x^2$
      // For simplicity in mock data, we just render it directly
      let desc = lesson.description;
      descRef.current.innerHTML = desc;
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <Button onClick={() => setLocation("/lessons")}>Back to Lessons</Button>
      </div>
    );
  }

  const isCompleted = completedLessons.has(lesson.id);
  const isFavorite = favoriteLessons.has(lesson.id);

  const relatedFiles = resources.filter(r => lesson.relatedFiles.includes(r.id));
  const relatedLessons = lessons.filter(l => lesson.relatedLessonIds.includes(l.id));

  const handleMarkComplete = () => {
    toggleComplete(lesson.id);
    if (!isCompleted) {
      toast({
        title: "Lesson Completed!",
        description: "Great job finishing this lesson.",
      });
    }
  };

  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("/embed/")) return url;
    if (url.includes("youtu.be/")) {
      const parts = url.split("youtu.be/");
      const id = parts[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("youtube.com/watch")) {
      try {
        const urlObj = new URL(url);
        const id = urlObj.searchParams.get("v");
        return `https://www.youtube.com/embed/${id}`;
      } catch (e) {
        return url;
      }
    }
    return url;
  };

  return (
    <PageTransition className="p-4 md:p-8 max-w-5xl mx-auto w-full">
      <Link href="/lessons">
        <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Lessons
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Real YouTube Video Player */}
          <div className="aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl border border-border">
            {lesson.videoUrl ? (
              <iframe
                src={getEmbedUrl(lesson.videoUrl)}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={lesson.title}
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No video URL available
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{lesson.chapter}</Badge>
                <Badge variant="outline" className="uppercase tracking-wider">{lesson.difficulty}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant={isFavorite ? "secondary" : "outline"} 
                  size="sm" 
                  className="gap-2"
                  onClick={() => toggleFavorite(lesson.id)}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  {isFavorite ? "Favorited" : "Favorite"}
                </Button>
                <Button 
                  variant={isCompleted ? "default" : "outline"} 
                  size="sm" 
                  className={`gap-2 ${isCompleted ? "bg-green-600 hover:bg-green-700 text-white" : ""}`}
                  onClick={handleMarkComplete}
                >
                  {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                  {isCompleted ? "Completed" : "Mark Complete"}
                </Button>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{lesson.title}</h1>
            
            <div className="flex flex-wrap gap-2">
              {lesson.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted font-normal">
                  #{tag}
                </Badge>
              ))}
            </div>

            <div className="prose dark:prose-invert max-w-none pt-4 border-t border-border">
              <p ref={descRef} className="text-lg text-muted-foreground leading-relaxed"></p>
            </div>
          </div>

          {relatedFiles.length > 0 && (
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Study Materials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedFiles.map((file, i) => (
                  <ResourceCard key={file.id} resource={file} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-3">Your Notes</h3>
            <Textarea 
              placeholder="Take notes here... (auto-saved)"
              className="min-h-[200px] resize-y bg-muted/50 border-0 focus-visible:ring-1"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <p className="text-xs text-muted-foreground text-right mt-2">Saved locally to your device.</p>
          </div>

          {relatedLessons.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4 text-muted-foreground uppercase tracking-wider text-sm">Up Next</h3>
              <div className="space-y-3">
                {relatedLessons.map(l => (
                  <Link key={l.id} href={`/lessons/${l.id}`}>
                    <div className="group flex gap-3 p-2 -mx-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                      <div className="w-24 h-16 bg-muted rounded-md flex items-center justify-center shrink-0 border border-border/50 text-2xl font-mono text-muted-foreground group-hover:text-primary transition-colors">
                        {l.thumbnailSymbol}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">{l.title}</h4>
                        <span className="text-xs text-muted-foreground mt-1">{l.duration}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}