import React from "react";
import { Formik } from "formik";
import styles from "./SignUpForm.module.scss";

const initialState = {
  email: "",
  password: "",
  name: "",
};

function SignUpForm(props) {
  const submitHandler = (values,formikBag) => {
    console.log(values)
    console.log(formikBag)
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      {(formikProps) => {
        console.log(formikProps);
        return (
          <form className={styles.form} onSubmit={formikProps.handleSubmit}>
            <input
              className={styles.input}
              type="email"
              name="email"
              onChange={formikProps.handleChange}
            ></input>
            <input
              className={styles.input}
              type="password"
              name="password"
              onChange={formikProps.handleChange}
            ></input>

            <input
              className={styles.input}
              type="text"
              name="name"
              onChange={formikProps.handleChange}
            ></input>

            <button className={styles.btn} type="submit">
              Sign Up
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
