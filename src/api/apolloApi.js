import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer `,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const QUERY_REPO = gql`
  query getRepo {
    user(login: "olinkaz93") {
      login
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