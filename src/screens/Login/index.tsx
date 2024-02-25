import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import formStyles from "../../form.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("Login");
  const handleSubmit = () => {
    navigate("dashboard");
  };
  return (
    <div className={styles.login}>
      <div className={styles.login__logo}></div>
      <div className={styles.login__div}>
        <form className={formStyles.form}>
          <div className={styles.login__title}>TODO</div>
          <label htmlFor="Username">Username</label>
          <input id={"Username"} type="text" />
          <label htmlFor="Password">Password</label>
          <input id={"Password"} type="password" />
          {mode === "Register" && (
            <>
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input id={"ConfirmPassword"} type="password" />
            </>
          )}
          <div className={styles.login__forgotPassword}>
            <p>Forgot Password</p>
          </div>
          <button type="button" onClick={handleSubmit}>
            {mode}
          </button>
          <div className={styles.login__registerLink}>
            <p
              onClick={() =>
                setMode((state) => (state === "Login" ? "Register" : "Login"))
              }
            >
              {mode === "Register" ? "Login instead?" : "Register"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
