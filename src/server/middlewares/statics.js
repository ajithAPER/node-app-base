import Express, {
  Router as router
} from 'express';
import Path from 'path';

let mwStaticsClient;

if ( process.env.NODE_ENV === 'development' ) {
  const Proxy = require('http-proxy-middleware');
  mwStaticsClient = Proxy( { target: 'http://localhost:3001', pathRewrite: { '^/statics': '' } } );
}

const mwStatics = Express.static(
  Path.join( process.cwd(), '/build/statics' )
);

const msGzipHeaders = ( req, res, next ) => {
  if ( ( /.gz$/ ).test( req.originalUrl ) ){
    res.set( 'Content-Encoding', 'gzip' );
    res.set( 'Content-Type', 'text/event-stream' );
  }
  next();
}

export {
  msGzipHeaders,
  mwStaticsClient,
  mwStatics
};
