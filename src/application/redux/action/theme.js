import { SET_DARK_MODE, REMOVE_DARK_MODE } from "./types";

export const toggleTheme = (theme) => (dispatch) => {
  if (theme === "dark") {
    dispatch({
      type: SET_DARK_MODE,
    });
  } else {
    dispatch({
      type: REMOVE_DARK_MODE,
    });
  }
};