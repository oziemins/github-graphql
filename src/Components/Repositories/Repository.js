import React from 'react';

const Repository = (props) => {
  const { repositoryOwner } = props;
  return (
    <div>
      <div>
        {console.log("REPOSITORY ITEM", repositoryOwner)}
        {console.log("REPOSITORY ITEM", repositoryOwner.login)}

        {console.log("REPOSITORY ITEM (REPOSITORIES)", console.log(Object.getOwnPropertyNames(repositoryOwner.repositories.nodes)))}
        <p> RepositoryOwner ID: {repositoryOwner.id}  </p>
        <p> RepositoryOwner login: {repositoryOwner.login} </p>
        <p> RepositoryOwner url: {repositoryOwner.url} </p>
        <p> Repository XXXX: {typeof(repositoryOwner.repositories.nodes.name)}</p>
        
      </div>
    </div>
  );
};

export default Repository;