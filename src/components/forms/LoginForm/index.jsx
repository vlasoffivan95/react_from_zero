import React, { useState, useReducer } from "react";
import { act } from "react-dom/test-utils";

function reducer(state, action) {
  const { type, payload } = action;
  const newState = {
    ...state,
    [type]: payload,
  };
  return newState;
}

const initialState = {
  email: "",
  password: "",
  isRemembering: false,
};

const LoginForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target: { value, checked, name, type } }) => {
    const newData = type === "checkbox" ? checked : value;
    const action = { type: name, payload: newData };
    dispatch(action);
  };

  return (
    <form>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="isRemembering"
          checked={state.isRemembering}
          onChange={handleChange}
        />{" "}
        Remember Me
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
