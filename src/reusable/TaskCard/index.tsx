import React from "react";
import styles from "./TaskCard.module.scss";
import formatter from "../../utils/formatter";
import { Task, updateStatus } from "../../state/slice/taskListSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";

const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskCard__header}>{task.name}</div>
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
          onClick={() => {
            dispatch(
              updateStatus({ taskId: task.taskId, status: "Completed" })
            );
          }}
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
