import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { type } from 'os';
const SET_USER_DATA = 'react-kab/auth/SET_USER_DATA';

export type InitialStateType = {
  userId: number | null;
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

let initialState = {
  userId: null as number | null,
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
};
export type InitialStateType2= typeof initialState
const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    // return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
type SetauthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type setauthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetauthUserDataActionPayloadType;
};
export const setauthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setauthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export type GetAuthUserData = {};
export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setauthUserData(id, login, email, true));
  }
};
export const login = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};
export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setauthUserData(null, null, null, false));
  }
};
export default authReducer;
