import { authAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";
const INITIALAZED_SUCCESS = "INITIALAZED_SUCCESS";

let initialState = {
  initialized: false
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALAZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    // return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
export const initializedSuccess = () => ({
  type: INITIALAZED_SUCCESS
});
export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
