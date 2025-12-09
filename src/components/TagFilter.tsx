import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const TagFilter = ({ tags, selectedTags, onTagToggle }: TagFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md border transition-all duration-300 btn-bounce",
              isSelected
                ? "bg-primary/20 text-primary border-primary/50 box-glow"
                : "bg-secondary/50 text-secondary-foreground border-border/50 hover:border-primary/30 hover:bg-secondary"
            )}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagFilter;
