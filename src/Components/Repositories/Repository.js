import React from 'react';

const Repository = (props) => {
  const { name, description, isFork } = props.repository;

  return (
    <div>
      <span>Name: {name} </span> 
      <span>Description: {description} </span> 
      <span>{isFork ? "yes": "no"} </span> 
    </div>
  );
};

export default Repository;