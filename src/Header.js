import React from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon>
            <PersonIcon fontSize="large" />
          </ArrowBackIosIcon>
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header_logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinderlogo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
