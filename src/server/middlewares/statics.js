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
  Path.join( process.cwd(), '/build/statics' )
);

export {
  mwStaticsClient,
  mwStatics
};
