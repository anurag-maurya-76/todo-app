import styles from "./TaskList.module.scss";
import TaskCard from "../../reusable/TaskCard";
import AddTask from "../AddTask";
import formatter from "../../utils/formatter";
import { greeter } from "../../utils/greeter";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const TaskList = () => {
  const taskList = useSelector((state: RootState) => state.taskList);
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
        <AddTask />
        {taskList.map((task, key) => {
          return <TaskCard task={task} key={key} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
