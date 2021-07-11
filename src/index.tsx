import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import { HomeContextProvider } from './context/HomeContext';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

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
