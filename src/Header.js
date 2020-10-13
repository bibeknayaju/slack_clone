import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
          //   alt={user?.displayName}
          //   src={user?.photoUrl}
        />
        {/* Avatar for login user */}

        <AccessTimeIcon />
        {/* time icon */}
      </div>
      <div className="header__search">
        <SearchIcon />
        {/* SearchIcon */}

        <input
          className="header__input"
          type="text"
          placeholder="Search for Bibek"
        />
        {/*  Input  */}
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutLineIcon />
      </div>
    </div>
  );
}

export default Header;
