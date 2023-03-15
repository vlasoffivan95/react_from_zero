import React, { Component } from "react";
import styles from "./SignUpForm.module.scss";

function signUp(userData) {
  console.log(`${userData.email} ${userData.password} is registered`);
}

const initialState = {
  email: "",
  password: "",
  accountLevel: "basic",
  isAdult: false,
  gender: 'female'
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
      target: { value, name, type, checked },
    } = e;
    const newValue = type === "checkbox" ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const { email, password, accountLevel, isAdult, gender } = this.state;
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
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="isAdult"
            checked={isAdult}
            onChange={this.handleChange}
          />{" "}
          Are you an adult?
        </label>
        <label>
          <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={gender==='male'}/> Male
          <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={gender==='female'} /> Female
        </label>
        <button disabled={!isAdult} className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
