import {
  Router as router
} from 'express';
import BodyParser from 'body-parser';

import {
  mwGraphiql as MwGraphiql
} from '../middlewares/graphql';

const Router = router();

Router.use( MwGraphiql );

export const url = '/graphiql';

export const route = Router;
