import React from 'react';
import Repository from '../Repository';
//import { useQuery } from "@apollo/client";
//import { QUERY_REPO } from '../../api/apolloApi';
import './style.css'

const RepositoryList = (props) => {
  console.log("RepositoryList props", props)
  const { data, fetchMore } = props
  console.log("repodata", data)
  console.log("total count", data.user.repositories.totalCount)
  console.log("edge node", data.user.repositories.edges)
  //if (error) return <h1>Something went wrong!</h1>;
  //if (loading) return <h1>Loading...</h1>;
  if (data) console.log(data.user.repositories.pageInfo)
  const hasNextPage = data.user.repositories.pageInfo.hasNextPage;
  return (
    <div className="repository-list">
      {data.user.repositories.totalCount === 0 ? <span>No repositories!</span> : 
      data.user.repositories.edges.map((repository) => (
        <Repository key={repository.node.id} repository={repository.node}/>
      ))} 
      {console.log("REPO REPO", data)}
      {data.user.repositories.pageInfo.hasNextPage ? console.log("endCursor", data.user.repositories.pageInfo.endCursor): null}
      {/*"fetch more", console.log(fetchMore)*/}
      
      {hasNextPage ? 
        <button onClick = {() => {
          const { endCursor } =  data.user.repositories.pageInfo.endCursor;
          
          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, {fetchMoreResult}) => {
              console.log("prev result", prevResult)
              console.log("more sult", fetchMoreResult)
              
            }
          });
        }}>Load more...</button> 
        : null }
    </div>
  );
};

export default RepositoryList;