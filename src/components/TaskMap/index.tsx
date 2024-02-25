import styles from "./TaskMap.module.scss";
import { IoMdClose } from "react-icons/io";
import { useFetchTask } from "../../hooks/useFetchTask";

const TaskMap = () => {
  const { data, isLoading, selectedTaskMap, setSelectedTaskMap } =
    useFetchTask();

  return (
    <div className={styles.taskMap}>
      <div className={styles.taskMap__title}>ToDo</div>
      <div className={styles.taskMap__list}>
        <div className={styles.taskMap__list__title}>My List</div>
        {!isLoading &&
          Object.keys(data).map((taskMap, index) => {
            return (
              <div
                className={
                  taskMap === selectedTaskMap
                    ? styles.taskMap__list__selected
                    : styles.taskMap__list__notSelected
                }
                key={index}
                onClick={() => setSelectedTaskMap(taskMap)}
              >
                {taskMap}
                {taskMap === selectedTaskMap && <IoMdClose size={22} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TaskMap;
