import Express, {
  Router as router
} from 'express';
import Path from 'path';
import Proxy from 'http-proxy-middleware';

let mwStaticsClient;

if ( process.env.NODE_ENV === 'development' ) {
  mwStaticsClient = Proxy( { target: 'http://localhost:3001', pathRewrite: { '^/statics': '' } } );
}

const mwStatics = Express.static(
  Path.join( process.cwd(), '/dist/statics' )
);

const mwGzipRedirect = ( req, res, next ) => {
  if (
    process.env.NODE_ENV !== 'development' &&
    ( /.js$/ ).test( req.url ) &&
    req.headers[ 'accept-encoding' ] &&
    ( /gzip/ ).test( req.headers[ 'accept-encoding' ] )
  ){
    req.url = `${req.url}.gz`;

    //res.redirect( `${req.url}.gz` );
  }
  next();
}

const mwGzipHeaders = ( req, res, next ) => {
  if ( ( /.gz$/ ).test( req.url ) ){
    res.set( 'Content-Encoding', 'gzip' );
    res.set( 'Content-Type', 'text/event-stream' );
  }
  next();
}

export {
  mwGzipRedirect,
  mwGzipHeaders,
  mwStaticsClient,
  mwStatics
};
