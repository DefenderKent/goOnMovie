import { newsAPI } from "../api/api";

const SET_FRIENDS = "SET_FRIENDS";

let initialState = {
  friends: []
};
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS: {
      return { ...state, friends: action.friends };
    }
    default:
      return state;
  }
};
export const setNewsAC = friends => ({ type: SET_FRIENDS, friends });
export default friendsReducer;
