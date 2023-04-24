import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import * as yup from "yup";

const SIGN_UP_SCHEMA = yup.shape({
  email: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().required(),
});

function SignUpForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      ></input>
      <input
        className={styles.input}
        type="password"
        name="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      ></input>

      <button className={styles.btn} type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
