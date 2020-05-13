import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./../PrifileDataForm/PrifileDataForm";
import userPhoto from "./../../../assets/img/user.jpg";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = props => {
  let [editMode, setEditMode] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = formData => {
    props.saveProfile(formData);
    setEditMode(false);
  };
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://фотообоиспб.рф/app/uploads/2018/02/bb493ac89a2b47405e-travel.jpg"
        />
      </div>
      <div className={s.info}>
        <img src={props.profile.photos.large || userPhoto} />
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>:<b>{contactValue}</b>
    </div>
  );
};
const ProfileData = props => {
  return (
    <div>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name:</b> {props.profile.fullName}
      </div>
      <div>
        <b>Looking For A Job:</b>
        {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>About me:</b>
        {props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map(key => {
          return (
            <Contact
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
      <div>{props.profile.aboutMe}</div>
      <ProfileStatusWithHook
        status={props.status}
        updateStatus={props.updateStatus}
      />
      ava+decsr
    </div>
  );
};

export default ProfileInfo;
