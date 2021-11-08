import "./app.css";

// useQuery - grapQL hook importnat to make a queries through our APIs
//import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
import React from "react";
//import DisplayData from "./DisplayData";
// import { setContext } from "@apollo/client/link/context";
import Footer from "./Footer";
//import RepositoryList from "./Repositories/RepositoryList";

import Header from "./Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";
const App = () => {
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/user" element={<Navigate replace to="/"/>}/>
          <Route path="/user/:userName" element={<Home />}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
