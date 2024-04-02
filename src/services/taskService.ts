import { axiosClient } from "../config/axios";
import { Filter } from "../interface/filterInterface";
import { Task } from "../interface/taskInterface";

class TaskService {
  async addTask(payload: Task) {
    const response = await axiosClient.post("/addTask", {
      taskName: payload.name,
      taskDescription: payload.description,
      taskStatus: payload.status,
      taskMapId: payload.taskMapId,
    });
    return response;
  }
  updateTask(payload: Task) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
  async getTask(payload: Filter) {
    const response = await axiosClient.get(
      `/getTaskList/${payload.taskMapId}?sortBy=${payload.sortBy}&sortDir=${payload.sortDir}`
    );
    return response;
  }
}
export const taskService = new TaskService();
