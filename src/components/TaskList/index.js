import React from "react";
import styles from "./TaskList.module.scss";
import TaskCard from "../../reusable/TaskCard";

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <div className={styles.taskList__header}>
        <div className={styles.taskList__header__date}>Feb 4</div>
        <div className={styles.taskList__header__title}>Good Afternoon</div>
        <div className={styles.taskList__header__subtitle}>
          What's your plan for today
        </div>
      </div>
      <div className={styles.taskList__body}>
        {[1, 2, 3, 4].map((value, key) => {
          return <TaskCard />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
