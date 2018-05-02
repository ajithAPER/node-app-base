import Express, {
  Router as router
} from 'express';
import Path from 'path';
import Proxy from 'http-proxy-middleware';

let mwStatics;

if ( process.env.NODE_ENV === 'production' ) {
  mwStatics = Express.static(
    Path.join( process.cwd(), '/build/statics' )
  );
} else {
  mwStatics = Proxy( { target: 'http://localhost:3001', pathRewrite: { '^/statics': '' } } );
}


export {
  mwStatics
};
