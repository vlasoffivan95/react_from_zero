import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import { SIGN_UP_SCHEMA } from "utils/validators/validationSchema";



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

const isValid1 = SIGN_UP_SCHEMA.isValidSync(user1);
const isValid2 = SIGN_UP_SCHEMA.isValidSync(user2);
console.log(isValid1);
console.log(isValid2);

try {
  const validate1 = SIGN_UP_SCHEMA.validateSync(user1, {
    strict: true,
    abortEarly: false,
  });
  console.log(validate1);
} catch (error) {
  console.dir(error);
}

try {
  const validate1 = SIGN_UP_SCHEMA.validateSync(user2, {
    strict: true,
    abortEarly: false,
  });
  console.log(validate1);
} catch (error) {
  console.dir(error);
}

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
