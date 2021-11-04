import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
//import { AUTH_TOKEN } from "../constants";

//console.log(AUTH_TOKEN)
//const token = AUTH_TOKEN
//console.log(token)
//console.log(`Bearer ${token}`)
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

//Fetch the user Login from the Search bar 
//const userName = 'oziemins'

export const QUERY_REPO = gql`
  query getRepo($userName: String!) {
    user(login: $userName) {
      id
      login
      repositories(last: 5) {
        totalCount
        nodes {
          id
          name
          description
          isFork
          pushedAt
          url
          issues {
            totalCount
          }
          pullRequests {
            totalCount
          }
        }
      }
    }
  }
`;
