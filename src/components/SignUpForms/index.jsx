import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import * as yup from "yup";

const SIGN_UP_SCHEMA = yup.object({
  email: yup.email().required(),
  firstName: yup.string().min(1).max(128).required(),
  lastName: yup.string().min(1).max(128).required(),
  password: yup.string().min(8).required(),
});

const user1 = {
  email: 12345,
  password: true,
  firstName: "",
  lastName: "Ivanov",
};

const user2 = {
  email: "dedgro@gmail.com",
  password: "Qwerty12345",
  firstName: "test",
  lastName: "anton",
};



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
