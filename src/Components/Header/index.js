import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <div className="header-text">Hacker News</div>
        <Link to="/">
          Page
        </Link>
      </div>
    </div>
  );
};

export default Header;