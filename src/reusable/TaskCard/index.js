import React from "react";
import styles from "./TaskCard.module.scss";
import formatter from "../../utils/formatter";

const TaskCard = React.forwardRef(({ task }, ref) => {
  return (
    <div className={styles.taskCard} ref={ref}>
      <div className={styles.taskCard__header}>{task.name}</div>
      <div className={styles.taskCard__description}>{task.desc}</div>
      <div className={styles.taskCard__dueDate}>
        {formatter.date(task.date).formattedDate}
      </div>
      <div className={styles.taskCard__footer}>
        <div className={styles.taskCard__footer__status}>{task.status}</div>
        <div className={styles.taskCard__footer__actions}>
          <button>Mark as Completed</button>
        </div>
      </div>
    </div>
  );
});

export default TaskCard;
