import React from 'react';
import './style.css'

const Repository = (props) => {
  console.log("props.repository", props.repository)
  console.log("length", typeof(props.repository))
  const { name, description, isFork, url, pushedAt, issues, pullRequests } = props.repository;

  return (
    <div className="repository-container">
      <div>Name: <a href={url} className="repository-link">{name}</a> </div>
      <div>Description: {description} </div>
      <div>Is it a fork? {isFork ? "YES": "NO"} </div> 
      <div>Last commit date: {pushedAt} </div>
      <div>Issue count: {issues.totalCount}</div>
      <div>Pull requests count: {pullRequests.totalCount}</div>
    </div>
  );
};

export default Repository;