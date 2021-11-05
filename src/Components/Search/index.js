import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_REPO } from '../../api/apolloApi';
import RepositoryList from '../RepositoryList';
import "./style.css";

const Search = () => {
    const [searchParameter, setSearchFilter] = useState('');
    const [executeSearch, { loading, error, data, fetchMore }] = useLazyQuery(QUERY_REPO, {variables: {after : null}});
    return (
      <>
        <div>
          <input
            type="text"
            placeholder="Search repositories from..."
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button
            onClick={() =>
              {executeSearch({
                variables: { userName: searchParameter }
              })
              }
            }
          >
            Search!
          </button>
        </div>
        {loading ? <span>"Searching..."</span> : null}
        {error ? <span>"No user found! Try again!" </span> : null }
        {data ? <RepositoryList data={data} fetchMore={fetchMore}/> : null}
        {console.log("FETCH MORE", fetchMore)}
        
      </>
    );
  };
  
  export default Search;