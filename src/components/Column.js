import React from "react";

const Column = ({ isOver, children }) => {
   const className = isOver ? " highlight-region" : "";

   return <div className={`col${className}`}>{children}</div>;
};

export default Column;
