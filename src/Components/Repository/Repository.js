import React from 'react';

const Repository = (props) => {
  console.log("props.repository", props.repository)
  console.log("length", typeof(props.repository))
  const { name, description, isFork, pushedAt, issues, pullRequests } = props.repository;

  return (
    <div>
      <span>Name: {name} </span> 
      <span>Description: {description} </span>
      <span>Is it a fork? {isFork ? "yes": "no"} </span> 
      <span>Last commit date: {pushedAt} </span>
      <span>Issue count: {issues.totalCount}</span>
      <span>Pull requests count: {pullRequests.totalCount}</span>
      <div>---------</div>
    </div>
  );
};

export default Repository;