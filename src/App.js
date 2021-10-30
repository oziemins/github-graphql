
import "./App.css";

// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
import { useQuery } from "@apollo/client";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
import { QUERY_REPO } from "./api/apolloApi";
import Footer from "./Footer";

function App() {
  const { loading, error, data } = useQuery(QUERY_REPO);
  
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
          <p>
            REPOSITORIES
            {console.log(data)}
     
          </p>
        </header>
        <Footer />
      </div>
      
  );
}

export default App;