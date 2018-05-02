import {
  Router as router
} from 'express';

import {
  mwDefault
} from '../middlewares/default';

const Router = router();

Router.use( mwDefault )

export const url = "";

export const route = Router;
