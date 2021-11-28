import {
  LOGIN_SUCCESS,
  AUTH_ERR,
  REGISTER_FAIL,
  LOGIN_FAILED,
  RESET_PASSWORD,
  LOGOUT,
  REGISTER_SUCCESS,
} from "../action/types";

const initialState = {
  isAuthenticated: true,
  loading: true,
  user: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case AUTH_ERR:
    case LOGIN_FAILED:
    case RESET_PASSWORD:
    case LOGOUT:
      // localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: "",
      };
    default:
      return state;
  }
}
