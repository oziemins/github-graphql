
import "./App.css";

// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
import { useQuery } from "@apollo/client";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
import { QUERY_REPO } from "../api/apolloApi";
import Footer from "./Footer";
import RepositoryList from "./Repositories/RepositoryList";

function App() {
  const { loading, error, data } = useQuery(QUERY_REPO);
  console.log(error)
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  console.log(loading, error, data)
  console.log(data.user)
  console.log(data.user.login)
   

  return (
      <div className="App">
      
        <p>
        GITHUB GRAPHQL API Project</p>
        
        <header className="App-header">
          <div>
            REPOSITORIES
            <h2>USER: {data.user.login} </h2>
            <h2>URL: {data.user.url}</h2>
            <RepositoryList />
                        
            {console.log(data.user.url)}
     
          </div>
        </header>
        
        <Footer />
      </div>
      
  );
}

export default App;