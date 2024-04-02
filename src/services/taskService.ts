import { axiosClient } from "../config/axios";
import { Task } from "../interface/taskInterface";

class TaskService {
  async addTask(payload: Task) {
    const response = await axiosClient.post("/addTask", {
      taskName: payload.name,
      taskDescription: payload.description,
      taskStatus: payload.status,
      taskMapId: payload.taskMapId,
    });
  }
  updateTask(payload: Task) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
  async getTask() {
    const response = await axiosClient.get(
      "/getTaskList/1?sortBy=createdAt&sortDir=DESC"
    );
    return response;
  }
}
export const taskService = new TaskService();
