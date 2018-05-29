import {
  Router as router
} from 'express';

import {
  mwStatics as MwStatics,
  mwStaticsClient as MwStaticsClient,
  mwGzipHeaders as MwGzipHeaders,
  mwGzipRedirect as MwGzipRedirect
} from '../middlewares/statics';

const Router = router();

Router.use( MwGzipRedirect );
Router.use( MwGzipHeaders );
Router.use( MwStatics );
if (MwStaticsClient){
  Router.use( MwStaticsClient );
}

export const url = '/statics';

export const route = Router;
