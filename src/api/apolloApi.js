import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          repositories: relayStylePagination(),
        },
      },
    },
  }),
});

//Fetch the user Login from the Search bar 
//const userName = 'oziemins'

export const QUERY_REPO = gql`
  query getRepo($userName: String!, $after: String) {
    user(login: $userName) {
      id
      login
      repositories(first: 2, after: $after) {
        totalCount
        edges {
          node {
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
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
