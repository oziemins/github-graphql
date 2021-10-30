import "./App.css";
// ApolloClient - class of client
// useQuery - grapQL hook importnat to make a queries through our APIs
import { ApolloClient, InMemoryCache, gql, HttpLink, useQuery } from "@apollo/client";
//import DisplayData from "./DisplayData";
import { setContext } from "@apollo/client/link/context";
import { QUERY_REPO } from "./api/apolloApi";


function App() {
  //wrap components with ApolloProvider component - that will make the requests within GraphQL
  const { loading, error, data } = useQuery(QUERY_REPO);
  console.log(error, data)

  return (
      <div className="App">
      
        <p>
        GITHUB GRAPHQL API Project</p>
        
        <header className="App-header">
          <p>
            GITHUB GRAPH QL API
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;