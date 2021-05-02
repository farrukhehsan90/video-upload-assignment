import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types';

const loginUser = payload => ({ type: LOGIN_REQUEST, payload });

const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });

const loginFailure = payload => ({ type: LOGIN_FAILURE, payload });

export {
  loginUser,
  loginSuccess,
  loginFailure
}