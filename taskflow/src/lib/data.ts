import { Task } from "./types";

export const demoTasks: Task[] = [
  {
    id: "1",
    title: "Finish quarterly report",
    completed: false,
    priority: "high",
    category: "Work",
    dueDate: new Date().toISOString().split("T")[0],
  },
  {
    id: "2",
    title: "Review pull requests",
    completed: false,
    priority: "medium",
    category: "Work",
    dueDate: new Date().toISOString().split("T")[0],
  },
  {
    id: "3",
    title: "Morning run — 5K",
    completed: true,
    priority: "medium",
    category: "Health",
    dueDate: new Date().toISOString().split("T")[0],
  },
  {
    id: "4",
    title: "Read chapter 5 of Design Patterns",
    completed: false,
    priority: "low",
    category: "Learning",
    dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
  },
  {
    id: "5",
    title: "Grocery shopping",
    completed: false,
    priority: "medium",
    category: "Personal",
    dueDate: new Date().toISOString().split("T")[0],
  },
  {
    id: "6",
    title: "Call dentist for appointment",
    completed: true,
    priority: "low",
    category: "Health",
    dueDate: new Date(Date.now() - 86400000).toISOString().split("T")[0],
  },
  {
    id: "7",
    title: "Prepare sprint demo slides",
    completed: false,
    priority: "high",
    category: "Work",
    dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
  },
  {
    id: "8",
    title: "Meditate — 15 minutes",
    completed: false,
    priority: "low",
    category: "Health",
    dueDate: new Date().toISOString().split("T")[0],
  },
  {
    id: "9",
    title: "Update portfolio website",
    completed: false,
    priority: "medium",
    category: "Personal",
    dueDate: new Date(Date.now() + 2 * 86400000).toISOString().split("T")[0],
  },
  {
    id: "10",
    title: "Watch TypeScript advanced course",
    completed: false,
    priority: "low",
    category: "Learning",
    dueDate: new Date(Date.now() + 3 * 86400000).toISOString().split("T")[0],
  },
];

export const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  Work: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  Personal: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  Health: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
  Learning: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
};

export const priorityConfig: Record<string, { color: string; label: string }> = {
  high: { color: "bg-red-500", label: "High" },
  medium: { color: "bg-yellow-400", label: "Medium" },
  low: { color: "bg-green-400", label: "Low" },
};
