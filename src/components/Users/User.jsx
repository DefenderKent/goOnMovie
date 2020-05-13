import React from "react";
import style from "./Users.module.css";

import { NavLink } from "react-router-dom";
import userPhoto from "./../../assets/img/user.jpg";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  let u = user;
  return (
    <div>
      <span>
        <div className={style.avatar}>
          <NavLink to={"/profile/" + u.id}>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {u.followed ? (
            <button
              disabled={followingInProgress.some(id => id === u.id)}
              onClick={() => {
                unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === u.id)}
              onClick={() => {
                follow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        {/* u.photos.small != null ? u.photos.small : userPhoto */}
        <div>{u.name}</div>
        <div>{u.status != null ? u.status : "No status"}</div>
        <span></span>
        <span></span>
      </span>
    </div>
  );
};

export default User;
