import React, { useState } from "react";
import styles from "./TaskList.module.scss";
import TaskCard from "../../reusable/TaskCard";
import AddTask from "../AddTask";
import formatter from "../../utils/formatter";
import { greeter } from "../../utils/greeter";

const TaskList = () => {
  const [taskList, setTaskList] = useState([
    {
      name: "First Task",
      desc: "I need to complete it by today",
      date: new Date(),
      status: "Pending",
    },
  ]);
  return (
    <div className={styles.taskList}>
      <div className={styles.taskList__header}>
        <div className={styles.taskList__header__date}>
          {formatter.date(new Date()).formattedDate}
        </div>
        <div className={styles.taskList__header__title}>{greeter()}</div>
        <div className={styles.taskList__header__subtitle}>
          What's your plan for today
        </div>
      </div>
      <div className={styles.taskList__body}>
        <AddTask setTaskList={setTaskList} />
        {taskList.map((task, key) => {
          return <TaskCard task={task} key={key} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
