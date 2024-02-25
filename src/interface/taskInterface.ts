export type TaskStatus = "Pending" | "Completed" | "In Progress";

export interface Task {
  taskId: string;
  name: string;
  description: string;
  status: TaskStatus;
  date: number;
}
