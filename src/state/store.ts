import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./slice/filterSlice";
import { taskListReducer } from "./slice/taskListSlice";

export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
