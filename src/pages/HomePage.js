import React, { useState } from "react";
import { statuses, task } from "../data/data";
import DropWrapper from "../components/DropWrapper";
import Column from "../components/Column";
import Task from "../components/Task";
import "../index.css";

const Homepage = () => {
   const [data, setData] = useState(task);
   const onDrop = (item, monitor, status) => {
      const mapping = statuses.find((si) => si.status === status);

      setData((prevState) => {
         const newItems = prevState
            .filter((i) => i.id !== item.id)
            .concat({ ...item, status, icon: mapping.icon });
         return [...newItems];
      });
   };

   const moveItem = (dragIndex, hoverIndex) => {
      const item = data[dragIndex];
      setData((prevState) => {
         const newItems = prevState.filter((i, idx) => idx !== dragIndex);
         newItems.splice(hoverIndex, 0, item);
         return [...newItems];
      });
   };
   return (
      <div className="row">
         {statuses.map((s) => {
            return (
               <div key={statuses} className="col-wrapper">
                  <h2 className="col-header">{s.status.toUpperCase()}</h2>
                  <DropWrapper onDrop={onDrop} status={s.status}>
                     <Column>
                        {data
                           .filter((i) => i.status === s.status)
                           .map((i, idx) => (
                              <Task
                                 key={i.id}
                                 item={i}
                                 index={idx}
                                 moveTask={moveItem}
                                 status={s}
                              ></Task>
                           ))}
                     </Column>
                  </DropWrapper>
               </div>
            );
         })}
      </div>
   );
};

export default Homepage;
