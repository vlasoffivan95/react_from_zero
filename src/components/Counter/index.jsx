import React, { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const ACTION_TYPES = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  CHANGE_STEP: "changeStep",
  RESET: "reset",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = { ...state, count: state.count + state.step };
      return newState;
    }
    case ACTION_TYPES.DECREMENT: {
      const newState = { ...state, count: state.count - state.step };
      return newState;
    }
    case ACTION_TYPES.CHANGE_STEP: {
      const newStep = { ...state, step: action.payload };
      return newStep;
    }
    case ACTION_TYPES.RESET: {
      const newState = { ...initialState };
      return newState;
    }
    default:
      return state;
  }
}

const Counter = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleStep = ({ target: { value } }) => {
    dispatch({ type: ACTION_TYPES.CHANGE_STEP, payload: +value });
  };

  const handleIncrement = () => dispatch({ type: ACTION_TYPES.INCREMENT });
  const handleDecrement = () => dispatch({ type: ACTION_TYPES.DECREMENT });
  const resetBtn = () => dispatch({ type: ACTION_TYPES.RESET });

  return (
    <div>
      <p>Count: {state.count}</p>

      <label>
        Step:
        <input type="number" value={state.step} onChange={handleStep} />
      </label>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );
};

export default Counter;
