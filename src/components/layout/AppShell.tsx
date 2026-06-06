import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { useRoute } from "wouter";

export function AppShell({ children }: { children: ReactNode }) {
  const [isLessonDetail] = useRoute("/lessons/:id");
  const [isResources] = useRoute("/resources");
  
  const showSidebar = isLessonDetail || isResources;

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        {showSidebar && (
          <aside className="hidden md:block w-64 border-r border-border shrink-0 bg-sidebar/50 backdrop-blur-sm overflow-y-auto">
            <Sidebar />
          </aside>
        )}
        <main className="flex-1 overflow-y-auto relative">
          {children}
        </main>
      </div>
    </div>
  );
}