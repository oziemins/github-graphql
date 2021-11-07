import "./style.css";
// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
//import RepositoryList from "./Repositories/RepositoryList";
import Search from "../Search"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    const { location } = new useNavigate();
    console.log("test location!", search, params)
  return (
    <div className="app-content">
      <div className="app-title">GITHUB REPOSITORIES</div>
      <Search />
    </div>
  );
};

export default Home;
