import React, { useReducer } from "react";
import ACTION_TYPES from "./actionTypes";
import { increment, decrement, changeStep } from "./actionCreators";
import { initialState, reducer } from "./reducer";

const Counter = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleStep = ({ target: { value } }) => {
    dispatch(changeStep(value));
  };

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
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
