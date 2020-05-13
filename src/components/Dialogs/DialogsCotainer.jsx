import React from "react";
import { Redirect } from "react-router-dom";
import Dialogs from "./Dialogs";

import {
  updateNewMessageCreator,
  addMassageCreator
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
  return { pageDialog: state.pageDialog };
};
let mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(addMassageCreator(newMessageBody));
    },
    updateNewMessage: body => {
      dispatch(updateNewMessageCreator(body));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
