import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_REPO } from "../../api/apolloApi";
import RepositoryList from "../RepositoryList";
import "./style.css";
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';

const Search = () => {
  const [searchParameter, setSearchFilter] = useState("");
  const [executeSearch, { loading, error, data, fetchMore }] = useLazyQuery(
    QUERY_REPO,
    { variables: { after: null } }
  );
  let navigate = useNavigate();
  let search = window.location.search;
  let params = new URLSearchParams(search);
  console.log("keys!", params.keys())
  const { userName } = useParams();
  console.log("Test username!", userName)

  return (
    <>
      <div>
        <input
          type="text"
          required
          placeholder="Type username..."
          onChange={(e) => setSearchFilter(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              executeSearch({
                variables: { userName: searchParameter },
              });
              navigate(`/user/${searchParameter}`);
            }
          }}
        />
        <button
          onClick={() => {
            executeSearch({
              variables: { userName: searchParameter },
            });
            navigate(`/user/${searchParameter}`);
            
          }}
        >
          Search!
        </button>
      </div>
      {loading ? <span>"Searching..."</span> : null}
      {error ? <span>"No user found! Try again!" </span> : null}
      {data
        ? console.log(
            "Is there more pagges?",
            data.user.repositories.pageInfo.hasNextPage
          )
        : null}
      {data ? <RepositoryList data={data} fetchMore={fetchMore} /> : null}
      {console.log("FETCH MORE", fetchMore)}
      {data && data.user.repositories.pageInfo.hasNextPage && (
        <button
          className="more-button"
          onClick={() =>
            fetchMore({
              variables: { after: data.user.repositories.pageInfo.endCursor },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.user.repositories.edges = [
                  ...prevResult.user.repositories.edges,
                  ...fetchMoreResult.user.repositories.edges,
                ];
                return fetchMoreResult;
              },
            })
          }
        >
          Load more...
        </button>
      )}
    </>
  );
};

export default Search;
