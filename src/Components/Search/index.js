import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_REPO } from '../../api/apolloApi';
import RepositoryList from '../Repositories/RepositoryList';

const Search = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [executeSearch, { data }] = useLazyQuery(QUERY_REPO);
    console.log("search data", data)
    return (
      <>
        <div>
          Search
          <input
            type="text"
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button
            onClick={() =>
              {executeSearch({
                variables: { userName: searchFilter }
              })
              console.log(data)}
            }
          >
            OK
          </button>
        </div>
        {data ? <RepositoryList data={data}/> : null}
      </>
    );
  };
  
  export default Search;