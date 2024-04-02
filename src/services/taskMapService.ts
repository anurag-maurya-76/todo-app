import { axiosClient } from "../config/axios";
import { Task } from "../interface/taskInterface";

class TaskMapService {
  async addTaskMap(payload: Task) {
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
  async getTaskMap() {
    const response = await axiosClient.get("/getTaskMap");
    return response;
  }
}
export const taskMapService = new TaskMapService();
