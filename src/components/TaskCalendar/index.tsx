import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Calendar from "react-calendar";
import formatter from "../../utils/formatter";
import Button from "../../reusable/Button";
import styles from "./TaskCalendar.module.scss";
import "./calendar.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { filterAction } from "../../state/slice/filterSlice";
import { SortBy } from "../../interface/filterInterface";

const TaskCalendar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filterState = useSelector((state: RootState) => state.filter);
  const handleUpdateSearch = (param: any) => {
    return dispatch(
      filterAction.updateSearch({
        searchBy: "Date",
        searchParameter: JSON.stringify(param),
      })
    );
  };
  const handleUpdateSortDir = () => {
    return dispatch(filterAction.updateSortDir());
  };
  const handleUpdateSortBy = (sortBy: SortBy) => {
    return dispatch(filterAction.updateSortBy(sortBy));
  };
  return (
    <div className={styles.taskCalendar}>
      <Calendar
        className={"react-calendar"}
        onChange={(value, event) => handleUpdateSearch(value)}
        formatShortWeekday={(locale, date) =>
          formatter.getDay(date.getUTCDay())
        }
      />
      <div className={styles.taskCalendar__header}>
        <div className={styles.taskCalendar__header__title}>Sort by</div>
        {filterState.sortDir === "ASC" && (
          <IoIosArrowUp
            className={styles.taskCalendar__header__icon}
            onClick={handleUpdateSortDir}
          />
        )}
        {filterState.sortDir === "DESC" && (
          <IoIosArrowDown
            className={styles.taskCalendar__header__icon}
            onClick={handleUpdateSortDir}
          />
        )}
      </div>
      <div className={styles.taskCalendar__grid}>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => handleUpdateSortBy("Date")}
        >
          Date
        </Button>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => handleUpdateSortBy("Name")}
        >
          Name
        </Button>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => handleUpdateSortBy("Description")}
        >
          Description
        </Button>
        <Button
          className={styles.taskCalendar__button}
          onClick={() => handleUpdateSortBy("Status")}
        >
          Status
        </Button>
        <Button
          className={styles.taskCalendar__clearButton}
          onClick={() => handleUpdateSortBy("")}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default TaskCalendar;
