import {
  Router as router
} from 'express';

import {
  mwStatics
} from '../middlewares/statics';

const Router = router();

Router.use( mwStatics );

export const url = "/statics";

export const route = Router;
