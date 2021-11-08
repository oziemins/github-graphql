import "./style.css";
// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
import Search from "../Search";

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-title">GITHUB REPOSITORIES</div>
      <Search />
    </div>
  );
};

export default Home;