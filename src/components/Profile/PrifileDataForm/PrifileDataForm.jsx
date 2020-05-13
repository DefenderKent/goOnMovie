import {
  createField,
  Input,
  Textarea
} from "./../../common/FormControls/FormControls";
import React, { useState } from "react";
import ProfileStatusWithHook from "./../ProfileInfo/ProfileStatusWithHook";
import { Field, reduxForm } from "redux-form";
const ProfileDataForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking For A Job:</b>

        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My prof skills:</b>

        {createField(
          "My prof skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me:</b>
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map(key => {
          return (
            <div>
              <b> {key}</b>:{createField(key, "contacts." + key, [], Input)}
            </div>
          );
        })}
      </div>
      <div>{props.profile.aboutMe}</div>
      <ProfileStatusWithHook
        status={props.status}
        updateStatus={props.updateStatus}
      />
      ava+decsr
    </form>
  );
};
const ProfileReduxForm = reduxForm({
  form: "editProfile"
})(ProfileDataForm);
export default ProfileReduxForm;
