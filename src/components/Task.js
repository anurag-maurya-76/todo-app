import React, { Fragment, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TASK } from "../data/ItemType";

const Task = ({ item, index, moveTask, status }) => {
   const ref = useRef(null);

   const [, drop] = useDrop({
      accept: TASK,
      hover(item, monitor) {
         if (!ref.current) {
            return;
         }
         const dragIndex = item.index;
         const hoverIndex = index;

         if (dragIndex === hoverIndex) {
            return;
         }

         const hoveredRect = ref.current.getBoundingClientRect();
         const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
         const mousePosition = monitor.getClientOffset();
         const hoverClientY = mousePosition.y - hoveredRect.top;

         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
         }

         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
         }
         moveTask(dragIndex, hoverIndex);
         item.index = hoverIndex;
      },
   });

   const [{ isDragging }, drag] = useDrag({
      type: TASK,
      item: { type: TASK, ...item, index },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });

   drag(drop(ref));

   return (
      <Fragment>
         <div
            ref={ref}
            style={{ opacity: isDragging ? 0 : 1 }}
            className={"item"}
         >
            <div
               className={"color-bar"}
               style={{ backgroundColor: status.color }}
            />
            <p className={"item-title"}>{item.content}</p>
            <p className={"item-status"}>{item.icon}</p>
         </div>
      </Fragment>
   );
};

export default Task;
