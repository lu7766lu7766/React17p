import { Action } from "../../types";

export default function count(state = 0, action: Action<number>): number {
  switch (action.type) {
    case "INCREMENT":
      return action.value;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
