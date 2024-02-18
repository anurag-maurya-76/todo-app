import React, { useState } from "react";
import styles from "./TaskMap.module.scss";
import { IoMdClose } from "react-icons/io";

const TaskMap = () => {
  const [taskMap, setTaskMap] = useState([1, 2]);
  return (
    <div className={styles.taskMap}>
      <div className={styles.taskMap__title}>ToDo</div>
      <div className={styles.taskMap__list}>
        <div className={styles.taskMap__list__title}>My List</div>
        {taskMap.map((taskList, index) => {
          console.log(taskList === 1);
          return (
            <div
              className={`${
                taskList === 1
                  ? styles.taskMap__list__selected
                  : styles.taskMap__list__notSelected
              }`}
              key={index}
            >
              Life
              {taskList === 1 && <IoMdClose size={22} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskMap;
