import React from "react";
import Search from "../Search";
import "./style.css";

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-title">GITHUB REPOSITORIES</div>
      <Search />
    </div>
  );
};

export default Home;