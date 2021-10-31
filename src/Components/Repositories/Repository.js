import React from 'react';

const Repository = (props) => {
  const { repositoryOwner } = props;
  return (
    <div>
      <div>
        {console.log("REPOSITORY CONSOLE", repositoryOwner)}
        {console.log("REPOSITORY CONSOLE", repositoryOwner.login)}
        <p> RepositoryOwner ID: {repositoryOwner.id}  </p>
        <p> RepositoryOwner login: {repositoryOwner.login} </p>
        <p> RepositoryOwner url: {repositoryOwner.url} </p>
      </div>
    </div>
  );
};

export default Repository;