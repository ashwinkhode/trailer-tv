import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import App from './App';
import { HomeContextProvider } from './context/HomeContext';
import './index.css';

const link = createHttpLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://trailer-tv-server.herokuapp.com/graphql'
      : 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

console.log('Graphql Endpoint', process.env.GRAPHQL_ENDPOINT);

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <HomeContextProvider>
        <App />
      </HomeContextProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
