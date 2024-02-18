import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./AddTask.module.scss";
import { IoMdClose } from "react-icons/io";
const initialFormState = {
  name: {
    value: "",
    error: "",
  },
  desc: {
    value: "",
    error: "",
  },
};
const AddTask = ({ setTaskList }) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleFormDispatch = (payload) => {
    setFormState((formState) => ({
      ...formState,
      ...payload,
    }));
  };

  const onChange = {
    name: (e) => {
      handleFormDispatch({
        name: {
          value: e.target.value,
          error:
            e.target.value.length < 2 ? "Please enter valid task name" : "",
        },
      });
    },
    desc: (e) => {
      handleFormDispatch({
        desc: {
          value: e.target.value,
          error:
            e.target.value.length < 2
              ? "Please enter valid task description"
              : "",
        },
      });
    },
  };

  const handleSubmit = () => {
    if (formState.name.value.length < 2) {
      handleFormDispatch({
        name: {
          value: formState.name.value,
          error:
            formState.name.value.length < 2
              ? "Please enter valid task name"
              : "",
        },
      });
      return;
    }
    if (formState.name.value.length < 2) {
      handleFormDispatch({
        desc: {
          value: formState.desc.value,
          error:
            formState.desc.valuelength < 2
              ? "Please enter valid task description"
              : "",
        },
      });
      return;
    }
    setTaskList((state) => [
      ...state,
      {
        name: formState.name.value,
        desc: formState.desc.value,
        date: new Date(),
        status: "Pending",
      },
    ]);
    handleFormDispatch(initialFormState);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={styles.addTask}
      onClick={() => !open && setOpen(true)}
      style={{ cursor: open ? "" : "pointer" }}
      animate={{
        height: open ? 300 : 50,
        width: open ? 600 : 100,
      }}
    >
      {open ? (
        <motion.div
          key={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IoMdClose
            size={28}
            onClick={() => setOpen(false)}
            color="white"
            className={styles.icon}
          />
          <form>
            <label htmlFor="taskName">Task Name</label>
            <input
              id={"taskName"}
              type="text"
              value={formState.name.value}
              onChange={onChange.name}
            />
            <div className={styles.error}>{formState.name.error}</div>
            <label htmlFor="taskDesc">Task Description</label>
            <input
              id={"taskDesc"}
              type="text"
              value={formState.desc.value}
              onChange={onChange.desc}
            />
            <div className={styles.error}>{formState.desc.error}</div>
            <div className={styles.submitBtn} onClick={handleSubmit}>
              Add Task
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.div key={2} exit={{ opacity: 0 }}>
          Add task
        </motion.div>
      )}
    </motion.div>
  );
};

export default AddTask;
