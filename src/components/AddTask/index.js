import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./AddTask.module.scss";
import Button from "../../reusable/Button";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className={`${styles.addTask} `}
        animate={{
          height: open ? 100 : 50,
          width: open ? 600 : 100,
        }}
      >
        {open ? (
          <motion.div
            key={1}
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <form>
              <Button type="button" onClick={() => setOpen(false)}>
                Close
              </Button>
              <input type="text" />
              <input type="text" />
              Pending
              <input type="radio" />
              In progress
              <input type="radio" />
              Completed
              <input type="radio" />
            </form>
          </motion.div>
        ) : (
          <motion.div
            onClick={() => {
              setOpen(true);
            }}
            key={2}
            exit={{ opacity: 0 }}
          >
            Add task
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AddTask;
