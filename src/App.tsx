import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { AppShell } from "@/components/layout/AppShell";
import NotFound from "@/pages/not-found";

import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const LessonsPage = lazy(() => import("@/pages/LessonsPage"));
const LessonDetailPage = lazy(() => import("@/pages/LessonDetailPage"));
const ResourcesPage = lazy(() => import("@/pages/ResourcesPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));

const queryClient = new QueryClient();

function Router() {
  return (
    <AppShell>
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          <span className="text-sm text-muted-foreground animate-pulse">Loading DdxMath...</span>
        </div>
      }>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/lessons" component={LessonsPage} />
          <Route path="/lessons/:id" component={LessonDetailPage} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/search" component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </AppShell>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
