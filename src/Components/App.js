import "./app.css";

// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
import Footer from "./Footer";
//import RepositoryList from "./Repositories/RepositoryList";
import Search from "./Search";
import Header from "./Header";

const App = () => {

    return (
      
      <div className="app">
        <Header />
          <div className="app-content">
            <div className="app-title">GITHUB REPOSITORIES</div>
            <Search/>
          </div>
               
        <Footer />
      </div>
  );
}

export default App;