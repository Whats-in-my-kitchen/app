import { SET_DARK_MODE, REMOVE_DARK_MODE } from "../action/types";

const initialState = {
  theme: "light",
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SET_DARK_MODE:
      return {
        ...state,
        theme: "dark",
      };
    case REMOVE_DARK_MODE:
      return {
        ...state,
        theme: "light",
      };
    default:
      return state;
  }
}