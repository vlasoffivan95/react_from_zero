import React, { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const newState = { ...state, count: state.count + state.step };
      return newState;
    }
    case "decrement": {
      const newState = { ...state, count: state.count - state.step };
      return newState;
    }
    case "changeStep": {
      const newStep = { ...state, step: action.payload };
      return newStep;
    }
    default:
      return state;
  }
}

const Counter = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleStep = ({ target: { value } }) => {
    dispatch({ type: "changeStep", payload: +value });
  };

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <p>Count: {state.count}</p>

      <label>
        Step:
        <input type="number" value={state.step} onChange={handleStep} />
      </label>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
