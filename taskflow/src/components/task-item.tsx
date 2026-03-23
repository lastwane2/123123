"use client";

import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { Task } from "@/lib/types";
import { categoryColors, priorityConfig } from "@/lib/data";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const cat = categoryColors[task.category];
  const pri = priorityConfig[task.priority];

  const isOverdue =
    !task.completed && task.dueDate < new Date().toISOString().split("T")[0];
  const isToday =
    task.dueDate === new Date().toISOString().split("T")[0];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -80, transition: { duration: 0.2 } }}
      className={`group flex items-center gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md ${
        task.completed ? "opacity-60" : ""
      } ${isOverdue ? "border-red-200 bg-red-50/30" : ""}`}
    >
      {/* Priority dot */}
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${pri.color}`} />

      {/* Custom checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
          task.completed
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted-foreground/30 hover:border-primary"
        }`}
      >
        {task.completed && (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-3 w-3"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M2.5 6.5L5 9L9.5 3.5" />
          </motion.svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium leading-tight ${
            task.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.title}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${cat.bg} ${cat.text}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${cat.dot}`} />
            {task.category}
          </span>
          <span
            className={`text-[11px] ${
              isOverdue
                ? "font-semibold text-red-600"
                : isToday
                ? "text-primary font-medium"
                : "text-muted-foreground"
            }`}
          >
            {isOverdue ? "Overdue" : isToday ? "Today" : task.dueDate}
          </span>
        </div>
      </div>

      {/* Delete */}
      <button
        onClick={() => onDelete(task.id)}
        className="shrink-0 rounded-lg p-1.5 text-muted-foreground opacity-0 transition-opacity hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
