import React from 'react';
import {
  render as Render
} from 'react-dom';
import {
  ApolloProvider
} from 'react-apollo';

import Config from '../config';

import ApolloClient from './apollo-client';

import Splash from '../universal/components/splash';

Render(
  (
    <ApolloProvider client={ ApolloClient }>
      <Splash />
    </ApolloProvider>
  ),
  document.getElementById('application')
);
