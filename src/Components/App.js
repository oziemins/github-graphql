import "./App.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/user" element={<Navigate replace to="/" />} />
          <Route path="/user/:userName" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
