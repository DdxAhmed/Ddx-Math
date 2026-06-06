import { PageTransition } from "@/components/layout/PageTransition";
import { useSearch } from "@/hooks/useSearch";
import { SearchBar } from "@/components/search/SearchBar";
import { LessonGrid } from "@/components/lessons/LessonGrid";
import { ResourceGrid } from "@/components/resources/ResourceGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  const { query, setQuery, results } = useSearch("");

  return (
    <PageTransition className="container max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10 space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
          <SearchIcon className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">Global Search</h1>
        <p className="text-muted-foreground text-lg">Search instantly across all lessons, videos, and PDFs.</p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <SearchBar value={query} onChange={setQuery} placeholder="e.g., 'Integration', 'Eigenvalues', 'Midterm'" />
      </div>

      {query.trim().length > 0 ? (
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="all">All ({results.lessons.length + results.resources.length})</TabsTrigger>
            <TabsTrigger value="lessons">Lessons ({results.lessons.length})</TabsTrigger>
            <TabsTrigger value="resources">Resources ({results.resources.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-12 mt-0">
            {results.lessons.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">Lessons</h2>
                <LessonGrid lessons={results.lessons} />
              </div>
            )}
            
            {results.resources.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">Resources</h2>
                <ResourceGrid resources={results.resources} />
              </div>
            )}
            
            {results.lessons.length === 0 && results.resources.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-semibold mb-2">No results found for "{query}"</h3>
                <p className="text-muted-foreground">Try using different keywords or checking your spelling.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="lessons" className="mt-0">
            <LessonGrid lessons={results.lessons} />
          </TabsContent>
          
          <TabsContent value="resources" className="mt-0">
            <ResourceGrid resources={results.resources} />
          </TabsContent>
        </Tabs>
      ) : (
        <div className="text-center py-20 opacity-50">
          <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-medium">Start typing to search</h3>
          <p className="text-muted-foreground mt-2">Find anything across the entire vault.</p>
        </div>
      )}
    </PageTransition>
  );
}