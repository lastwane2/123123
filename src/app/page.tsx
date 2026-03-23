"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { demoTasks, categoryColors } from "@/lib/data";
import type { Category, Task } from "@/lib/types";
import { ProgressRing } from "@/components/progress-ring";
import { TaskItem } from "@/components/task-item";
import { AddTaskDialog } from "@/components/add-task-dialog";

const categories: (Category | "All")[] = [
  "All",
  "Work",
  "Personal",
  "Health",
  "Learning",
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(demoTasks);
  const [filter, setFilter] = useState<Category | "All">("All");

  const filtered =
    filter === "All" ? tasks : tasks.filter((t) => t.category === filter);
  const completed = tasks.filter((t) => t.completed).length;

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function addTask(task: Task) {
    setTasks((prev) => [task, ...prev]);
  }

  const priorityOrder = { high: 0, medium: 1, low: 2 };
  const sorted = [...filtered].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="flex-1">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">TaskFlow</h1>
            <p className="text-sm text-muted-foreground">
              Stay on track, one task at a time.
            </p>
          </div>
          <AddTaskDialog onAdd={addTask} />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-6">
        {/* Progress + Filters */}
        <div className="mb-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <ProgressRing completed={completed} total={tasks.length} />

          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            {categories.map((c) => {
              const isActive = filter === c;
              const colors = c !== "All" ? categoryColors[c] : null;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    isActive
                      ? c === "All"
                        ? "bg-primary text-primary-foreground"
                        : `${colors!.bg} ${colors!.text}`
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Task list */}
        <div className="flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {sorted.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </AnimatePresence>

          {sorted.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              <p className="text-4xl mb-2">🎉</p>
              <p className="font-medium">
                {filter === "All"
                  ? "No tasks yet. Add one!"
                  : `No ${filter} tasks.`}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
