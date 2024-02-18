import React from "react";
import styles from "./Dashboard.module.scss";
import TaskCard from "../../reusable/TaskCard";
import AddTask from "../../components/AddTask";
import TaskList from "../../components/TaskList";
import TaskMap from "../../components/TaskMap";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <TaskMap />
      <TaskList />
    </div>
  );
};

export default Dashboard;
