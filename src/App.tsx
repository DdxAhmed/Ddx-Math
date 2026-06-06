import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { AppShell } from "@/components/layout/AppShell";
import NotFound from "@/pages/not-found";

import HomePage from "@/pages/HomePage";
import LessonsPage from "@/pages/LessonsPage";
import LessonDetailPage from "@/pages/LessonDetailPage";
import ResourcesPage from "@/pages/ResourcesPage";
import SearchPage from "@/pages/SearchPage";
import AdminDashboard from "@/pages/AdminDashboard";
import { usePageTracking } from "@/hooks/usePageTracking";

const queryClient = new QueryClient();

function Router() {
  usePageTracking();

  return (
    <AppShell>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/lessons" component={LessonsPage} />
        <Route path="/lessons/:id" component={LessonDetailPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/dashboard" component={AdminDashboard} />
        <Route component={NotFound} />
      </Switch>
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
