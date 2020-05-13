import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../common/FormControls/FormControls";
import {
  required,
  maxLengthCreator
} from "./../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const Dialogs = props => {
  let state = props.pageDialog;
  let data = props.store;

  let addMessage = () => {
    props.sendMessage();
  };
  let addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  let onMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessage(body);
  };
  if (!props.isAuth) return <Redirect to={"/login"} />;

  let dialogsElements = state.dialogsData.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />;
  });

  let messageElements = state.messages.map(m => {
    return <Message message={m.message} id={m.id} data={data} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}

        <MessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
const MessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"enter message"}
          validate={[required, maxLength50]}
          name={"newMessageBody"}
          component={Textarea}
        />
      </div>
      <div>
        <button>Send Message</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "message"
})(MessageForm);
export default Dialogs;
