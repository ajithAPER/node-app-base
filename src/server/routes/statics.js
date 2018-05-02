import {
  Router as router
} from 'express';

import {
  mwStatics as MwStatics
} from '../middlewares/statics';

const Router = router();

Router.use( MwStatics );

export const url = "/statics";

export const route = Router;
