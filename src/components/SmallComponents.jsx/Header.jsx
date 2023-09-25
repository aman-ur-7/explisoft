import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo" className="image" />
      </div>
      <div className="header-content">
        <div>
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Features</span>
          <span>Team</span>
          <span>Contact</span>
        </div>
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
