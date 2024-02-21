import React from "react";
import styles from "./Dashboard.module.scss";
import TaskList from "../../components/TaskList";
import TaskMap from "../../components/TaskMap";
import TaskCalendar from "../../components/TaskCalendar";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <TaskMap />
      <TaskList />
      <TaskCalendar />
    </div>
  );
};

export default Dashboard;
