import React from "react";
import styles from "./TaskCard.module.scss";

const TaskCard = React.forwardRef((props, ref) => {
  return (
    <div className={styles.taskCard} ref={ref}>
      <div className={styles.taskCard__header}>Task 1</div>
      <div className={styles.taskCard__description}>
        I want to do this task tomorrow, so I won't start today
      </div>
      <div className={styles.taskCard__dueDate}>8th Feb, 2023</div>
      <div className={styles.taskCard__footer}>
        <div className={styles.taskCard__footer__status}>Pending</div>
        <div className={styles.taskCard__footer__actions}>
          <button>Mark as Completed</button>
        </div>
      </div>
    </div>
  );
});

export default TaskCard;
