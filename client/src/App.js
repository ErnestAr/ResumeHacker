import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

//IMPORT PAGES
import Home  from './pages/Home';
import About  from './pages/About';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginSignUp  from './pages/LoginSignUp';
import { setContext } from '@apollo/client/link/context';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <hr style={{marginInline:'5vw'}}></hr>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/LoginSignUp' component={LoginSignUp} />
        </Switch>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
