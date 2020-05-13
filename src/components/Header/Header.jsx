import React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://image.freepik.com/free-vector/film-logo-design_93835-629.jpg" />
      <div className={s.login}>
        {props.isAuth ? (
          <div className={s.headerLoguot}>
            {props.login}{" "}
            <button className={s.headerBtn} onClick={props.logout}></button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
