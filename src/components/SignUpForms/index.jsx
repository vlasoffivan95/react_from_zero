import React, { Component } from "react";
import styles from "./SignUpForm.module.scss";

function signUp(userData) {
  console.log(`${userData.email} ${userData.password} is registered`);
}

const initialState = {
  email: "",
  password: "",
  accountLevel: "basic",
};

class SignUpForm extends Component {
  state = {
    ...initialState,
  };

  submitHandler = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    signUp({
      email,
      password,
    });
    this.setState({
      ...initialState,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleChange = (e) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password, accountLevel } = this.state;
    return (
      <form onSubmit={this.submitHandler} className={styles.form}>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        ></input>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        ></input>
        <select
          className={styles.input}
          name="accountLevel"
          value={accountLevel}
          onChange={this.handleChange}
        >
          <option value="basic">Basic</option>
          <option value="adv">Adv</option>
          <option value="pro">Pro</option>
        </select>
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
