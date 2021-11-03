import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_REPO } from '../../api/apolloApi';

const Search = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [executeSearch, { data }] = useLazyQuery(QUERY_REPO);

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
              executeSearch({
                variables: { userName: searchFilter }
              })
            }
          >
            OK
          </button>
        </div>
        {console.log(data)}
      </>
    );
  };
  
  export default Search;