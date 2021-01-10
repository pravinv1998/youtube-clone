import React, { useState } from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import "./Header.css";
const Header = () => {

  const [inputSearch, setInputSearch] = useState("")

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />

        <Link to={"/"}>
          <img
            className="header__logo"
            src="https://www.adtape.net/wp-content/uploads/2020/01/sta%C5%BEen%C3%BD-soubor.png"
            alt="youtube icon"
          />
        </Link>

      </div>

      <div className="header__input">
        <input value={inputSearch} onChange={(text) => setInputSearch(text.target.value)} type="text" placeholder="Search" />

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>

      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />

        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
};

export default Header;
