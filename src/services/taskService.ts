import { Filter } from "../interface/filterInterface";
import { Task } from "../interface/taskInterface";

const taskMap: Record<string, Task[]> = {
  Life: [
    {
      date: 1382086394000,
      description: "Life Task Description",
      name: "Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
    {
      date: 1382086394000,
      description: "Life Task Description",
      name: "Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
    {
      date: 1382086394000,
      description: "Life Task Description",
      name: "Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
    {
      date: 1382086394000,
      description: "Life Task Description",
      name: "Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
  ],
  "Not Life": [
    {
      date: 1382086394000,
      description: "Not Life Task Description",
      name: "Not Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
    {
      date: 1382086394000,
      description: "Not Life Task Description",
      name: "Not Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
    {
      date: 1382086394000,
      description: "Not Life Task Description",
      name: "Not Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
    {
      date: 1382086394000,
      description: "Not Life Task Description",
      name: "Not Life Task",
      status: "Pending",
      taskId: "ASDFG-SDFGH-SDFGH",
    },
  ],
};

class TaskService {
  addTask(payload: Task) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
  updateTask(payload: Task) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
  getTask(payload: Filter) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(taskMap);
      }, 1000);
    });
  }
}
export const taskService = new TaskService();
