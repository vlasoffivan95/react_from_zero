import React from "react";
import { Formik, Field, Form } from "formik";
import styles from "./SignUpForm.module.scss";
import { SIGN_UP_SCHEMA } from "utils/validators/validationSchema";

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

    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={submitHandler}
      validationSchema={SIGN_UP_SCHEMA}
    >
      <Form className={styles.form}>
        <Field className={styles.input} type="email" name="email" placeholder="email"/>
        <Field className={styles.input} type="password" name="password" placeholder="password" />
        <Field className={styles.input} type="text" name="name" placeholder="name"/>
        <Field name="accountLevel" as="select">
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
      </Form>
    </Formik>
  );
}

export default SignUpForm;
