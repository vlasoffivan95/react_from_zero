import ACTION_TYPES from "./actionTypes";

export function increment() {
  const action = { type: ACTION_TYPES.INCREMENT };
  return action;
}

export function decrement() {
  const action = { type: ACTION_TYPES.DECREMENT };
  return action;
}

export function changeStep(step) {
  return { type: ACTION_TYPES.CHANGE_STEP, payload: +step };
}
