

const SET_DB = "SET_DB";
type InitialState = {
  persons: any[]
}

let initialState = {
  persons: []
};
const fireBaseReducer = (state = initialState, action:any):InitialState => {
  switch (action.type) {
    case SET_DB: {
      return { ...state, persons: action.persons };
    }
    default:
      return state;
  }
};
export const setdb = (persons:any )=> ({ type: SET_DB, persons });
export default fireBaseReducer;
