import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

function Header({ backgroundColor = "white", darkMode }) {
  const style = {
    backgroundColor,
  };
  return (
    <div style={style} className={`header ${darkMode && "header__dark"}`}>
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Afiniti_Logo.png/640px-Afiniti_Logo.png?1650421092916"
          alt="img"
        />
      </div>

      <div className="header__right">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
      <div className="header__right--mobile">
        <MenuIcon />
      </div>
    </div>
  );
}
export default Header;
