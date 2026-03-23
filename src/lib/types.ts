export type Priority = "high" | "medium" | "low";
export type Category = "Work" | "Personal" | "Health" | "Learning";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  dueDate: string; // ISO date string
}
