import styles from "./TaskCard.module.scss";
import { Task } from "../../interface/taskInterface";
import { MdModeEdit } from "react-icons/md";
import { taskService } from "../../services/taskService";
import { queryClient } from "../../App";

const TaskCard = ({ task }: { task: Task }) => {
  const handleUpdateTask = async () => {
    await taskService.updateTask({
      date: Date.now(),
      description: task.description,
      name: task.name,
      status: "COMPLETED",
      taskId: task.taskId,
      taskMapId: task.taskMapId,
    });
    queryClient.invalidateQueries();
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
      <div className={styles.taskCard__dueDate}>{task.date}</div>
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
