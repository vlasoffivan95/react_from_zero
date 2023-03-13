import React, { Component } from "react";
import styles from "./SignUpForm.module.scss";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.password.value);
    console.log(e.target.email.value);
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
        target: {value, name}
    } = e

    this.setState({
        [name]:value
    })
}


  render() {
    const { email, password } = this.state;
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
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
