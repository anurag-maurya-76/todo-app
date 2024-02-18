import React from "react";
import styles from "./Button.module.scss";
const Button = React.forwardRef(({ onClick, type, style, children }, ref) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
});

export default Button;
