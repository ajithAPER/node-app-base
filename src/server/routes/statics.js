import Express, {
  Router as router
} from 'express';
import Path from 'path';
import Proxy from 'http-proxy-middleware';

const Router = router();

if ( process.env.NODE_ENV === 'production' ) {
  Router.use(
    Express.static(
      Path.join( process.cwd(), '/build/statics' )
    )
  );
} else {
  Router.use(
    Proxy( { target: 'http://localhost:3001', pathRewrite: { '^/statics': '' } } )
  );
}

export const url = "/statics";

export const route = Router;
