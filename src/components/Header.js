import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ backgroundColor: "#737f94", opacity: "90%" }}
    >
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth className="item" />
      </div>
    </div>
  );
};

export default Header;
