
import "./app.css";

// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
import Footer from "./Footer";
//import RepositoryList from "./Repositories/RepositoryList";
import Search from "./Search";

function App() {
    return (
      <div className="App">
      
        <p>
        GITHUB GRAPHQL API Project
        </p>
        
        <header className="App-header">
          <div>
            <h1>GITHUB REPOSITORIES</h1>
            <Search/>
            
          </div>
        </header>
        
        <Footer />
      </div>
      
  );
}

export default App;