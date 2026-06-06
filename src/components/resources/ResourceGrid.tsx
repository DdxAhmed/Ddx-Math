import { Resource } from "@/data/resources";
import { ResourceCard } from "./ResourceCard";

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12 px-4 border border-dashed rounded-xl border-border/60 bg-muted/20">
        <h3 className="text-lg font-semibold mb-2">No resources found</h3>
        <p className="text-muted-foreground text-sm">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {resources.map((resource, idx) => (
        <ResourceCard key={resource.id} resource={resource} index={idx} />
      ))}
    </div>
  );
}