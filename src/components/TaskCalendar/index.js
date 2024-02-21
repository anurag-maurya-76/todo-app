import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Calendar from "react-calendar";
import formatter from "../../utils/formatter";
import Button from "../../reusable/Button";
import styles from "./TaskCalendar.module.scss";
import "./calendar.scss";

const TaskCalendar = () => {
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
        <IoIosArrowDown className={styles.taskCalendar__header__icon} />
      </div>
      <div className={styles.taskCalendar__grid}>
        <Button className={styles.taskCalendar__button}>Date</Button>
        <Button className={styles.taskCalendar__button}>Name</Button>
        <Button className={styles.taskCalendar__button}>Priority</Button>
        <Button className={styles.taskCalendar__button}>Tag</Button>
        <Button className={styles.taskCalendar__clearButton}>Clear</Button>
      </div>
    </div>
  );
};

export default TaskCalendar;
