import React from 'react';
import ReactDOM from 'react-dom/server';
import Proxy from 'http-proxy-middleware';

import Html from '../../universal/components/Html';
import Splash from '../../universal/components/Splash';

export const defaultResponse = ( req, res ) => {
  const html = (
    <Html
      content={<Splash />}
      />
  );

  res.status(200);
  res.send( `<!doctype html>\n${ReactDOM.renderToStaticMarkup( html )}` );
  res.end();
};
