import { newsAPI } from "../api/api";

const SET_DB = "SET_DB";

let initialState = {
  persons: []
};
const fireBaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DB: {
      return { ...state, persons: action.persons };
    }
    default:
      return state;
  }
};
export const setdb = persons => ({ type: SET_DB, persons });
export default fireBaseReducer;
