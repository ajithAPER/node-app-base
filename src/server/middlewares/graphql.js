import {
  graphqlExpress as GraphqlExpress,
  graphiqlExpress as GraphiqlExpress
} from 'apollo-server-express';

import GQLSchema from '../graphql';

export const mwGraphql = GraphqlExpress( {
  schema: GQLSchema
} );

export const mwGraphiql = GraphiqlExpress( {
  endpointURL: '/graphql'
} );
