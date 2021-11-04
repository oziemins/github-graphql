import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/apolloApi';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={ client }> <App /> </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

