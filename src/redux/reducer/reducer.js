import {initialstate} from "../initialstate/initialstate"
import { ADD } from "../actionType/actionType";


export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + 1,
      };
    case "remove":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
