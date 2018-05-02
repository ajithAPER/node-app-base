import {
  Router as router
} from 'express';
import BodyParser from 'body-parser';

import {
  mwGraphql as MwGraphql
} from '../middlewares/graphql';

const Router = router();

Router.use( BodyParser.json() );
Router.use( MwGraphql );

export const url = '/graphql';

export const route = Router;
