import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  return (
    <div className={s.friends__block}>
      {props.users.map((u) => (
        <Friend
          user={u}
          followingInProgress={props.followingInProgress}
          key={u.id}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Friends;
