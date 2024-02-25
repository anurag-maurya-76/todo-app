import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { taskService } from "../services/taskService";
import { taskAction } from "../state/slice/taskListSlice";
import { AppDispatch, RootState } from "../state/store";

export const useFetchTask = () => {
  const payload = useSelector((state: RootState) => state.filter);
  const [selectedTaskMap, setSelectedTaskMap] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useQuery<any>(
    ["getTask", payload],
    async () => await taskService.getTask(payload),
    {
      cacheTime: 300000,
    }
  );

  useEffect(() => {
    if (data && isLoading === false) {
      setSelectedTaskMap(Object.keys(data)[0]);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (data && isLoading === false) {
      dispatch(taskAction.updateTask(data[selectedTaskMap]));
    }
  }, [selectedTaskMap, data, dispatch, isLoading]);

  return {
    data,
    isLoading,
    selectedTaskMap,
    setSelectedTaskMap,
  };
};
