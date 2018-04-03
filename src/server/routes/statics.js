import Express, {
  Router as router
} from 'express';
import Path from 'path';
import Proxy from 'http-proxy-middleware';

const Router = router();

if ( process.env.NODE_ENV === 'production' ) {
  Router.get(
    '/index.js',
    ( req, res, next ) => {
      return res.sendFile( Path.join( process.cwd(), 'build/client/index.js' ) );
    }
  );
  Router.use(
    Express.static(
      Path.join( process.cwd(), '/build/client/statics' )
    )
  )

} else {
  Router.use(
    '/index.js',
    Proxy( { target: 'http://localhost:3001', pathRewrite: { '^/statics': '' } } )
  );
  Router.use(
    '/',
    Proxy( { target: 'http://localhost:3001' } )
  );
}

export const url = "/statics";

export const route = Router;
