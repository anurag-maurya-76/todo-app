import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { taskMapService } from "../services/taskMapService";
import { taskAction } from "../state/slice/taskListSlice";
import { AppDispatch, RootState } from "../state/store";

export const useFetchTask = () => {
  const payload = useSelector((state: RootState) => state.filter);
  const [selectedTaskMapId, setSelectedTaskMapId] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useQuery<any>(
    ["getTask", payload],
    async () => await taskMapService.getTaskMap(),
    {
      cacheTime: 300000,
    }
  );

  useEffect(() => {
    if (data && isLoading === false) {
      setSelectedTaskMapId(data.data.responseBody[0].taskMapId);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (isLoading) {
      dispatch(taskAction.updateTask([]));
    } else if (data) {
      dispatch(taskAction.updateTask([]));
    }
  }, [selectedTaskMapId, data, dispatch, isLoading]);

  return {
    data,
    isLoading,
    selectedTaskMapId,
    setSelectedTaskMapId,
  };
};
