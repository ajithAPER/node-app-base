import {
  GQC
} from 'graphql-compose';
import _ from 'lodash';

import AllQueries from './queries/*';

//initailizing all queries
const queries = {};

_.each(AllQueries, ( { default: query } ) => {
  queries[ query.name ] = query;
});

GQC.rootQuery().addFields(queries);

export default GQC.buildSchema();
