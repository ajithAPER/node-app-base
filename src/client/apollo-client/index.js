import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import HttpLink from './http-link';

const apolloClient = new ApolloClient({
  link: HttpLink,
  cache: new InMemoryCache()
});

export default apolloClient;
