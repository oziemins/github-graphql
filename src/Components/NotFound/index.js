import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NotFound= () => {
  return (
    <div className="notfound-content">
      <div className="notfound-title">
      <p>Sorry! PAGE DOES NOT EXIST!</p>
      <Link className="notfound-link" to="/">GO BACK TO THE HOME PAGE</Link>
      </div>
    </div>
  );
};

export default NotFound;
