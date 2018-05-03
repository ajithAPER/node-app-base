import React from 'react';
import ReactDOM from 'react-dom/server';
import Proxy from 'http-proxy-middleware';

import Html from '../../universal/components/html';
import Splash from '../../universal/components/splash';

export const mwSetCompressedJsUrl = ( req, res, next ) => {
  if (
    process.env.NODE_ENV !== 'development' &&
    req.headers[ 'accept-encoding' ] &&
    ( /gzip/ ).test( req.headers[ 'accept-encoding' ] )
  ){
    res._jsFileUrl = '/statics/js/index.js';
  }
  next();
};

export const mwDefault = ( req, res ) => {
  const html = (
    <Html
      jsFileUrl={ res._jsFileUrl }
      >
      <Splash
        />
    </Html>
  );

  res.status(200);
  res.send( `<!doctype html>\n${ReactDOM.renderToStaticMarkup( html )}` );
  res.end();
};
