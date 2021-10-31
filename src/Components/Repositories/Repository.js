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
        <div> Repository:{(repositoryOwner.repositories.nodes).map(el=>
            //console.log(
            //"Repo name", el.name,
            //"Description", el.description,
            //"isFork", el.isFork),
            (<p>Name: {el.name} Description: {el.description} pushedAt {el.pushedAt}</p>)
            )}</div>
        
      </div>
    </div>
  );
};

export default Repository;