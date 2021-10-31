import React from "react";

const Header = (props) => {
  return (
    <header>
      {props.backgroundColor}
      <div className="orange"></div>
      <nav>
        <a>About</a>
        <a>Trips</a>
        <a>Pricing</a>
        <a>Contact</a>
      </nav>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
