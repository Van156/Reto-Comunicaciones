import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET_SESSION,
  UPDATE_AUTH,
  USER_LOADED,
  USER_LOADING,
} from '../types';

const initialState = {
  type: 'phone',
  isAuthenticated: false,
  isLoading: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        //user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case UPDATE_AUTH:
      return {...state, ...action.payload};
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case RESET_SESSION:
      return initialState;
    default:
      return state;
  }
}
