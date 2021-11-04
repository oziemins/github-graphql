import React from 'react';
import Repository from '../Repository';
//import { useQuery } from "@apollo/client";
//import { QUERY_REPO } from '../../api/apolloApi';
import './style.css'

const RepositoryList = (props) => {
  console.log("RepositoryList props", props)
  const { data } = props
  console.log("repodata", data)
  console.log("total count", data.user.repositories.totalCount)
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
    <div className="repository-list">
      
      {/* 
      <h2> {data.user.login} </h2>
      <h2> {data.user.url} </h2>
      <h2> {data.user.id} </h2> */}
      {data.user.repositories.totalCount === 0 ? <span>No repositories!</span> : 
      data.user.repositories.nodes.map((repository) => (
        <Repository key={repository.id} repository={repository}/>
      ))} 
    </div>
  );
};

export default RepositoryList;