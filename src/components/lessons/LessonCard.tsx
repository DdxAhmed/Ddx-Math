import { Lesson } from "@/data/lessons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";

export function LessonCard({ lesson, index = 0 }: { lesson: Lesson, index?: number }) {
  const { completedLessons, favoriteLessons, toggleFavorite } = useProgress();
  
  const isCompleted = completedLessons.has(lesson.id);
  const isFavorite = favoriteLessons.has(lesson.id);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Intermediate": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Advanced": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
        <div className="relative aspect-video bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <span className="font-mono text-5xl md:text-7xl font-bold text-primary/40 group-hover:scale-110 group-hover:text-primary/60 transition-all duration-500">
            {lesson.thumbnailSymbol}
          </span>
          <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-xs font-mono font-medium text-foreground border border-border/50">
            {lesson.duration}
          </div>
          {isCompleted && (
            <div className="absolute top-2 left-2 bg-green-500/90 text-white p-1 rounded-full backdrop-blur-sm shadow-sm">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm hover:bg-background/80 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(lesson.id);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground'}`} />
          </Button>
          
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={`/lessons/${lesson.id}`}>
              <Button size="lg" className="rounded-full shadow-lg gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Now
              </Button>
            </Link>
          </div>
        </div>
        
        <CardContent className="p-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant="outline" className="text-xs font-semibold bg-primary/5 text-primary border-primary/10">
              {lesson.subject}
            </Badge>
          </div>
          
          <Link href={`/lessons/${lesson.id}`} className="hover:text-primary transition-colors">
            <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
              {lesson.title}
            </h3>
          </Link>
          
          <p className="text-muted-foreground text-sm line-clamp-2 mt-auto mb-4">
            {lesson.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}