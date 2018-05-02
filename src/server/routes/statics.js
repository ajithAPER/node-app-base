import {
  Router as router
} from 'express';

import {
  mwStatics as MwStatics,
  mwStaticsClient as MwStaticsClient,
  msGzipHeaders as MsGzipHeaders
} from '../middlewares/statics';

const Router = router();

Router.use( MsGzipHeaders );
Router.use( MwStatics );
if (MwStaticsClient){
  Router.use( MwStaticsClient );
}

export const url = '/statics';

export const route = Router;
