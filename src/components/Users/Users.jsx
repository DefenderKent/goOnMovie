import React from "react";
import style from "./Users.module.css";

import { NavLink } from "react-router-dom";
import userPhoto from "./../../assets/img/user.jpg";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = props => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />

      {props.users.map(u => (
        <User
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

export default Users;
