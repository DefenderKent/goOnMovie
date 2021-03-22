import { getAuthUserData } from './authReducer';
const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS';

export type InitialState = {
  initialized: boolean;
};

let initialState: InitialState = {
  initialized: false,
};
const appReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case INITIALAZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    // return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
type InitializedSuccessActionType = {
  type: typeof INITIALAZED_SUCCESS;
};
export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALAZED_SUCCESS,
});
export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
