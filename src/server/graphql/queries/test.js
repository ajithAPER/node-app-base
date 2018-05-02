import {
	GraphQLString
} from 'graphql';
import { Resolver } from 'graphql-compose';

const test = new Resolver({
  name: 'test',
  type: GraphQLString,
  resolve: async ({ source, args, context, info }) => {
    return "Working";
  }
});

export default test;
