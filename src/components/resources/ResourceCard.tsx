import { Resource } from "@/data/resources";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, FileArchive, MonitorPlay, FileCheck, CheckCircle2, Video } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function ResourceCard({ resource, index = 0 }: { resource: Resource, index?: number }) {
  const { downloadHistory, addDownload } = useProgress();
  const { toast } = useToast();
  const hasDownloaded = downloadHistory.includes(resource.id);

  const getIcon = () => {
    switch (resource.type) {
      case "PDF": return <FileText className="h-6 w-6 text-red-500" />;
      case "Slides": return <MonitorPlay className="h-6 w-6 text-orange-500" />;
      case "Assignment": return <FileArchive className="h-6 w-6 text-blue-500" />;
      case "Exam": return <FileText className="h-6 w-6 text-purple-500" />;
      case "Solution": return <FileCheck className="h-6 w-6 text-green-500" />;
      case "Video": return <Video className="h-6 w-6 text-indigo-500" />;
      default: return <FileText className="h-6 w-6 text-primary" />;
    }
  };

  const handleDownload = () => {
    addDownload(resource.id);
    
    if (resource.downloadUrl && resource.downloadUrl !== "#") {
      const link = document.createElement("a");
      link.href = resource.downloadUrl;
      const filename = resource.downloadUrl.split("/").pop() || `${resource.title}.pdf`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    toast({
      title: "Download Started",
      description: `Downloading ${resource.title} (${resource.fileSize})`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card 
        onClick={handleDownload}
        className="group overflow-hidden border-border/50 bg-card hover:shadow-md hover:border-primary/20 transition-all duration-200 cursor-pointer"
      >
        <CardContent className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            {getIcon()}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm md:text-base truncate mb-1" title={resource.title}>
               {resource.title}
             </h4>
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <Badge variant="outline" className="text-xs font-semibold bg-primary/5 text-primary border-primary/10 px-1.5 py-0">
                {resource.category}
              </Badge>
              <Badge variant="outline" className="font-normal px-1.5 py-0">
                {resource.type}
              </Badge>
              <span className="text-muted-foreground mx-1">•</span>
              <span className="text-muted-foreground">{resource.fileSize}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-1 shrink-0">
            <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Download className="h-5 w-5" />
            </Button>
            {hasDownloaded && (
              <span className="text-[10px] text-green-500 font-medium flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Saved
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}