import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appRreduser from "./appReducer";
import newsReducer from "./newsReducer";

import { reducer as formReducer } from "redux-form";
import friendsReducer from "./friendsReducer";
import fireBaseReducer from "./fireBaseReducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  pageDialog: dialogsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  newsPage: newsReducer,
  auth: authReducer,
  form: formReducer,
  app: appRreduser,
  friends: friendsReducer,
  persons: fireBaseReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
