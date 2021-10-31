import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer`,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

//Fetch the user Login from the Search bar 
const userName = 'oziemins'

export const QUERY_REPO = gql`
  query getRepo {
    user(login: "${userName}") {
      id
      login
      url
      repositories(last: 5) {
        nodes {
          name
          description
          isFork
          pushedAt
          createdAt
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
