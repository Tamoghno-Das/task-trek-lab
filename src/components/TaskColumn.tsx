import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  tags: string[];
  status: "todo" | "doing" | "done";
}

interface TaskColumnProps {
  title: string;
  icon: string;
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}

const TaskColumn = ({ title, icon, tasks, onDeleteTask }: TaskColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h2 className="font-display text-xl font-semibold text-foreground text-glow">
          {title}
        </h2>
        <span className="ml-2 px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
          {tasks.length}
        </span>
      </div>
      
      <div className="flex flex-col gap-3 min-h-[200px]">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            tags={task.tags}
            onDelete={() => onDeleteTask(task.id)}
          />
        ))}
        
        {tasks.length === 0 && (
          <div className="flex items-center justify-center h-32 border border-dashed border-border/50 rounded-lg text-muted-foreground text-sm">
            No tasks yet
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
