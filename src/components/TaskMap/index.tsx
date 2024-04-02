import styles from "./TaskMap.module.scss";
import { IoMdClose } from "react-icons/io";
import { useFetchTask } from "../../hooks/useFetchTask";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import colors from "../../_export.scss";

const TaskMap = () => {
  const navigate = useNavigate();
  const { data, isLoading, selectedTaskMapId, setSelectedTaskMapId } =
    useFetchTask();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className={styles.taskMap}>
      <div className={styles.taskMap__header}>
        <div className={styles.taskMap__header__title}>TODO</div>
        <FiLogOut
          onClick={handleLogout}
          className={styles.taskMap__header__icon}
        />
      </div>
      <div className={styles.taskMap__list}>
        <div className={styles.taskMap__list__title}>My List</div>
        {!isLoading &&
          data.data.responseBody.map((taskMap: any, index: number) => {
            return (
              <motion.div
                className={styles.taskMap__list__button}
                key={index}
                initial={{
                  backgroundColor: colors.grey,
                  color: colors.textBright,
                  x: -100,
                }}
                animate={{
                  x: 0,
                  backgroundColor:
                    taskMap.taskMapId === selectedTaskMapId
                      ? colors.yellow
                      : colors.grey,
                  color:
                    taskMap.taskMapId === selectedTaskMapId
                      ? colors.grey
                      : colors.textBright,
                }}
                transition={{
                  duration: 0.2,
                }}
                onClick={() => setSelectedTaskMapId(taskMap.taskMapId)}
              >
                {taskMap.taskMapName}
                {taskMap === selectedTaskMapId && <IoMdClose size={22} />}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default TaskMap;
