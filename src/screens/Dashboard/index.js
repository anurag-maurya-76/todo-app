import React from "react";
import styles from "./Dashboard.module.scss";
import TaskCard from "../../reusable/TaskCard";
import AddTask from "../../components/AddTask";
import TaskList from "../../components/TaskList";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* <div className={styles.dashboard__header}>
        <AddTask />
      </div> */}

      <TaskList />
    </div>
  );
};

export default Dashboard;
