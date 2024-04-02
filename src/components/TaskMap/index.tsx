import styles from "./TaskMap.module.scss";
import { IoMdClose } from "react-icons/io";
import { useFetchTaskMap } from "../../hooks/useFetchTaskMap";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import colors from "../../_export.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { filterAction } from "../../state/slice/filterSlice";

const TaskMap = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchTaskMap();
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
                    taskMap.taskMapId === filter.taskMapId
                      ? colors.yellow
                      : colors.grey,
                  color:
                    taskMap.taskMapId === filter.taskMapId
                      ? colors.grey
                      : colors.textBright,
                }}
                transition={{
                  duration: 0.2,
                }}
                onClick={() =>
                  dispatch(filterAction.updateTaskMapId(taskMap.taskMapId))
                }
              >
                {taskMap.taskMapName}
                {taskMap.taskMapId === filter.taskMapId && (
                  <IoMdClose size={22} />
                )}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default TaskMap;
