import { useState, useMemo } from "react";
import { lessons } from "../data/lessons";
import { resources } from "../data/resources";

export function useSearch(initialQuery = "") {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    if (!query.trim()) return { lessons: [], resources: [] };
    
    const q = query.toLowerCase();
    
    const matchedLessons = lessons.filter(l => 
      l.title.toLowerCase().includes(q) || 
      l.description.toLowerCase().includes(q) || 
      l.chapter.toLowerCase().includes(q) ||
      l.tags.some(t => t.toLowerCase().includes(q))
    );
    
    const matchedResources = resources.filter(r => 
      r.title.toLowerCase().includes(q) || 
      r.chapter.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q)
    );
    
    return {
      lessons: matchedLessons,
      resources: matchedResources
    };
  }, [query]);

  return { query, setQuery, results };
}