import React from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("dashboard");
  };
  return (
    <div className={styles.login}>
      <div className={styles.login__logo}>
        <img
          src={process.env.PUBLIC_URL + "/Logo.png"}
          alt={"Img"}
          height={100}
          width={100}
        />
      </div>
      <form className={styles.login__form}>
        <input className={styles.login__form__input} />
        <input className={styles.login__form__input} />
        <button
          className={styles.login__form__submitBtn}
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div className={styles.login__forgotPassword}>
          <a href="https://www.google.com">Forgot Password</a>
        </div>
      </form>
      <div className={styles.login__registerLink}>
        <a href="https://www.google.com">Register</a>
      </div>
    </div>
  );
};

export default Login;
