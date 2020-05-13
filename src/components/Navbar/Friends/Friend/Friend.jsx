import React from "react";
import s from "./Friend.module.scss";
import userPhoto from "./../../../../assets/img/user.jpg";

const Friend = (props) => {
  return (
    <div className={s.df}>
      <img
        src={
          props.user.photos.small != null ? props.user.photos.small : userPhoto
        }
        alt=""
      />{" "}
      <div className={s["mr"]}>{props.user.name}</div>
    </div>
  );
};
export default Friend;
