import React from 'react';
import ReactDOM from 'react-dom/server';
import Proxy from 'http-proxy-middleware';

import Html from '../../universal/components/html';
import Splash from '../../universal/components/splash';

export const mwDefault = ( req, res ) => {
  const html = (
    <Html
      content={Splash}
      />
  );

  res.status(200);
  res.send( `<!doctype html>\n${ReactDOM.renderToStaticMarkup( html )}` );
  res.end();
};
