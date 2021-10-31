import React from 'react';
import Repository from './Repository';
import { useQuery } from "@apollo/client";
import { QUERY_REPO } from '../../api/apolloApi';


const RepositoryList = () => {

  const { loading, error, data } = useQuery(QUERY_REPO);
  console.log(error)
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  console.log(loading, error, data)
  console.log("Repositories", data)
  console.log("Repositories", data.user.login)
  console.log("Repositories", data.user.url)
  
  /* const repositoriesToRender = [
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
  ]; */

  return (
    <div>
      {/* 
      <h2> {data.user.login} </h2>
      <h2> {data.user.url} </h2>
      <h2> {data.user.id} </h2> */}
      <Repository key={data.id} repositoryOwner={data.user}/>
      {/*repositoriesToRender.map((data) => (
        <Repository key={data.id} repositoryOwner={data} />
      ))*/}
    </div>
  );
};

export default RepositoryList;