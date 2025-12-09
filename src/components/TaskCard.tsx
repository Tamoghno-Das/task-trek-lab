import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface TaskCardProps {
  title: string;
  tags: string[];
  onDelete: () => void;
}

const tagColors: Record<string, string> = {
  HTML: "bg-glow-orange/20 text-glow-orange border-glow-orange/50",
  CSS: "bg-glow-cyan/20 text-glow-cyan border-glow-cyan/50",
  JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  React: "bg-glow-cyan/20 text-glow-cyan border-glow-cyan/50",
};

const TaskCard = ({ title, tags, onDelete }: TaskCardProps) => {
  return (
    <div className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-4 transition-all duration-300 hover:border-primary/50 hover:bg-card box-glow-hover">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-foreground group-hover:text-glow transition-all duration-300">
            {title}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-xs font-medium rounded-md border ${tagColors[tag] || "bg-secondary text-secondary-foreground border-border"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
