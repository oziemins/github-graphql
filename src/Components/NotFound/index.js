import "./style.css";
// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
//import RepositoryList from "./Repositories/RepositoryList";

import { Link } from "react-router-dom";

const NotFound= () => {
  return (
    <div className="app-content">
      <div className="app-title">
      <p>Sorry! PAGE DOES NOT EXIST!</p>
      <Link className="app-link" to="/">GO BACK TO THE HOME PAGE</Link>
      </div>
    </div>
  );
};

export default NotFound;
