import React from 'react';
import './style.css'

const Repository = (props) => {
  console.log("props.repository", props.repository)
  console.log("length", typeof(props.repository))
  const { name, description, isFork, url, pushedAt, issues, pullRequests } = props.repository;
  //console.log("pushed at type", pushedAt.split("T"))
  const pushedAtDate = pushedAt.split("T")[0]
  const pushedAtHour = (pushedAt.split("T")[1].split("Z"))[0]
  //console.log(pushedAtHour)

  return (
    <div className="repository-container">
      <div>Name: <a href={url} className="repository-link">{name}</a> </div>
      <div>Description: {{description} === null ? {description} : "No description" } </div>
      <div>Is it a fork? {isFork ? "Yes": "No"} </div> 
      <div>Last commit date: {pushedAtDate} at {pushedAtHour} </div>
      <div>Issue count: {issues.totalCount}</div>
      <div>Pull requests count: {pullRequests.totalCount}</div>
    </div>
  );
};

export default Repository;