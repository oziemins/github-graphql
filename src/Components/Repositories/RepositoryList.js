import React from 'react';
import Repository from './Repository';
import { useQuery } from "@apollo/client";
import { QUERY_REPO } from '../../api/apolloApi';


const RepositoryList = () => {

  const { loading, error, data } = useQuery(QUERY_REPO);
  console.log("Repositories", data)
  const repositoriesToRender = [
    {
      id: '1',
      login: 'oziemins',
      url: 'https://github.com/oziemins'
    },
    {
      id: '2',
      login: 'cisco',
      url: 'https://githhub.com/cisco'
    }
  ];

  return (
    <div>
      {repositoriesToRender.map((repository) => (
        <Repository key={repository.id} repositoryOwner={repository} />
      ))}
    </div>
  );
};

export default RepositoryList;