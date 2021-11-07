import "./app.css";

// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
import Footer from "./Footer";
//import RepositoryList from "./Repositories/RepositoryList";

import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
const App = () => {
  
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
