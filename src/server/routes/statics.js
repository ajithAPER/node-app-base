import {
  Router as router
} from 'express';

import {
  mwStatics as MwStatics,
  mwStaticsClient as MwStaticsClient
} from '../middlewares/statics';

const Router = router();

Router.use( MwStatics );
if (MwStaticsClient){
  Router.use( MwStaticsClient );
}

export const url = "/statics";

export const route = Router;
