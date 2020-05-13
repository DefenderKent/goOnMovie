import React from "react";
import s from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import iconProfile from "./../../assets/img/users.png";
import iconMessage from "./../../assets/img/message.png";
import iconPeople from "./../../assets/img/people.png";
import iconNews from "./../../assets/img/news.png";
import iconMusic from "./../../assets/img/music.png";
import iconGear from "./../../assets/img/gear.png";
import iconFriend from "./../../assets/img/friend.png";

const Navbar = (props) => {
  return (
    <div>
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            <img src={iconProfile} alt="" /> Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            <img src={iconMessage} alt="" />
            Message
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.activeLink}>
            <img src={iconPeople} alt="" />
            Users
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>
            <img src={iconNews} alt="" />
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>
            <img src={iconMusic} alt="" />
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/setting" activeClassName={s.activeLink}>
            <img src={iconGear} alt="" />
            Setting
          </NavLink>
        </div>
        <div className={s.item}>
          <div>
            <NavLink to="/friends" activeClassName={s.activeLink}>
              <img src={iconFriend} alt="" />
              friends
            </NavLink>
            <div className={s.frendsContainer}>
              <p>Сейчас online:</p>
              <FriendsContainer />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
