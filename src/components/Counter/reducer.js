import ACTION_TYPES from "./actionTypes";

export const initialState = {
  count: 0,
  step: 1,
};

export function reducer(state, action) {
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
