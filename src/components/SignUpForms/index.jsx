import React from "react";
import { Formik, Field } from "formik";
import styles from "./SignUpForm.module.scss";

const initialState = {
  email: "",
  password: "",
  name: "",
  gender: "male",
  isSub: false,
  accountLevel: "basic",
};

function SignUpForm(props) {
  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      {(formikProps) => {
        return (
          <form className={styles.form} onSubmit={formikProps.handleSubmit}>
            <Field className={styles.input} type="email" name="email" />
            <Field className={styles.input} type="password" name="password" />
            <Field className={styles.input} type="text" name="name" />
            <Field name="accountLevel" as="select" >
              <option value="basic">Basic</option>
              <option value="middle">Middle</option>
              <option value="Pro">Pro</option>
              </Field>
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <Field type="checkbox" name="isSuB" />
              Add Sub
            </label>

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
