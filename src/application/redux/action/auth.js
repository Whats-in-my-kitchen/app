import { AUTH_ERR, LOGIN_SUCCESS } from "./types";

export const loginUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: 'data',
    });
    return true;
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERR,
    });
    return false;
  }
};
