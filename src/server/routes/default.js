import {
  Router as router
} from 'express';

import {
  mwDefault as MwDefault,
  mwSetCompressedJsUrl as MwSetCompressedJsUrl
} from '../middlewares/default';

const Router = router();

Router.use( MwSetCompressedJsUrl );
Router.use( MwDefault );

export const url = '';

export const route = Router;
