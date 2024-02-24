import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Calendar from "react-calendar";
import formatter from "../../utils/formatter";
import Button from "../../reusable/Button";
import styles from "./TaskCalendar.module.scss";
import "./calendar.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { filterAction } from "../../state/slice/filterSlice";

const TaskCalendar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filterState = useSelector((state: RootState) => state.filter);
  return (
    <div className={styles.taskCalendar}>
      <Calendar
        className={"react-calendar"}
        onChange={(value, event) => console.log(value)}
        formatShortWeekday={(locale, date) =>
          formatter.getDay(date.getUTCDay())
        }
      />
      <div className={styles.taskCalendar__header}>
        <div className={styles.taskCalendar__header__title}>Sort by</div>
        {filterState.sortDir === "ASC" && (
          <IoIosArrowUp
            className={styles.taskCalendar__header__icon}
            onClick={() => dispatch(filterAction.updateSortDir())}
          />
        )}
        {filterState.sortDir === "DESC" && (
          <IoIosArrowDown
            className={styles.taskCalendar__header__icon}
            onClick={() => dispatch(filterAction.updateSortDir())}
          />
        )}
      </div>
      <div className={styles.taskCalendar__grid}>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => dispatch(filterAction.updateSortBy("Date"))}
        >
          Date
        </Button>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => dispatch(filterAction.updateSortBy("Name"))}
        >
          Name
        </Button>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => dispatch(filterAction.updateSortBy("Priority"))}
        >
          Priority
        </Button>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => dispatch(filterAction.updateSortBy("Tag"))}
        >
          Tag
        </Button>
        <Button
          className={styles.taskCalendar__clearButton}
          onClick={() => dispatch(filterAction.updateSortBy(""))}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default TaskCalendar;
