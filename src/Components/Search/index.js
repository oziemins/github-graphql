import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_REPO } from '../../api/apolloApi';
import RepositoryList from '../RepositoryList';
import "./style.css";

const Search = () => {
    const [searchParameter, setSearchFilter] = useState('');
    const [executeSearch, { loading, error, data }] = useLazyQuery(QUERY_REPO);
    console.log("search data", data)
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
              console.log(data)}
            }
          >
            OK
          </button>
        </div>
        {loading ? <span>"Searching..."</span> : null}
        {error ? <span>"No user found! Try again!" </span> : null }
        {data ? <RepositoryList data={data}/> : null}
      </>
    );
  };
  
  export default Search;