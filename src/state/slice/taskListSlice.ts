import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Task {
  taskId: string;
  name: string;
  description: string;
  status: "Pending" | "Completed" | "In Progress";
  date: Date;
}
export interface AddTaskPayload {
  name: string;
  description: string;
  status: "Pending" | "Completed" | "In Progress";
  date: Date;
}

const initialState: Task[] = [];
const taskListSlice = createSlice({
  name: "taskList",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      state.push({ ...action.payload, taskId: v4() });
      return state;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.forEach((task) => {
        if (task.taskId === action.payload.taskId) {
          task.name = action.payload.name ?? task.name;
          task.description = action.payload.description ?? task.description;
          task.status = action.payload.status ?? task.status;
          return state;
        }
      });
      return state;
    },
    updateStatus: (
      state,
      action: PayloadAction<{
        taskId: String;
        status: "Pending" | "Completed" | "In Progress";
      }>
    ) => {
      state.forEach((task) => {
        if (task.taskId === action.payload.taskId) {
          task.status = action.payload.status ?? task.status;
          return state;
        }
      });
      return state;
    },
  },
});
export const { addTask, updateTask, updateStatus } = taskListSlice.actions;
export const taskListReducer = taskListSlice.reducer;
