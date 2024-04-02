import React from "react";
import styles from "./TaskCard.module.scss";
import formatter from "../../utils/formatter";
import { taskService } from "../../services/taskService";
import { Task } from "../../interface/taskInterface";
import { MdModeEdit } from "react-icons/md";

const TaskCard = ({ task }: { task: Task }) => {
  const handleUpdateTask = () => {
    // taskService.updateTask({
    //   date: Date.now(),
    //   description: "Description",
    //   name: "Name",
    //   status: "COMPLETED",
    //   taskId: "Wow",
    // });
  };

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskCard__header}>
        <div className={styles.taskCard__header__title}>{task.name}</div>
        <MdModeEdit
          onClick={handleUpdateTask}
          className={styles.taskCard__header__icon}
        />
      </div>
      <div className={styles.taskCard__description}>{task.description}</div>
      <div className={styles.taskCard__dueDate}>
        {formatter.date(task.date).formattedDate}
      </div>
      <div className={styles.taskCard__footer}>
        <div className={styles.taskCard__footer__status}>{task.status}</div>
        <div className={styles.taskCard__footer__actions}></div>
        <button
          type="button"
          className={styles.taskCard__button}
          onClick={handleUpdateTask}
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
