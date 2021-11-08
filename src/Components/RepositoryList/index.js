import React from 'react';
import Repository from '../Repository';
import './style.css'

const RepositoryList = (props) => {
  const { data } = props
  if (data) console.log(data.user.repositories.pageInfo)

  return (
    <div className="repository-list">
      {data.user.repositories.totalCount === 0 ? <span>No repositories!</span> : 
      data.user.repositories.edges.map((repository) => (
        <Repository key={repository.node.id} repository={repository.node}/>
      ))}   

    </div>
  );
};

export default RepositoryList;