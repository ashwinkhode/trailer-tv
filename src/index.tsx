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
import { UserProvider } from './context/UserContext';

const link = createHttpLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
      : 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

console.log(`${process.env.NODE_ENV} Graphql Endpoint`, process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <UserProvider>
        <HomeContextProvider>
          <App />
        </HomeContextProvider>
      </UserProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
