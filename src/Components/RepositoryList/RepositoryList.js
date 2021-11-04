import React from 'react';
import Repository from '../Repository/Repository';
//import { useQuery } from "@apollo/client";
//import { QUERY_REPO } from '../../api/apolloApi';

const RepositoryList = (props) => {
  console.log("RepositoryList props", props)
  const { data } = props
  console.log("repo data", data)
  
  //const { loading, error, data } = useQuery(QUERY_REPO);
  //console.log(data)
  //console.log(error)
  //if (error) return <h1>Something went wrong!</h1>;
  //if (loading) return <h1>Loading...</h1>;
  //console.log(loading, error, data)
  //console.log("Repositories LIST", data)
  //console.log("Repositories LIST", data.user.login)
  //console.log("Repositories LIST", data.user.url)
  
   //console.log("nodes", data.user.respositories.nodes)
  return (
    <div>
      
      {/* 
      <h2> {data.user.login} </h2>
      <h2> {data.user.url} </h2>
      <h2> {data.user.id} </h2> */}
      
      {data.user.repositories.nodes.map((repository) => (
        <Repository key={repository.id} repository={repository} />
      ))}
    </div>
  );
};

export default RepositoryList;