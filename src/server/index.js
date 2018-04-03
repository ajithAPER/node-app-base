import 'source-map-support/register';
import Express from 'express';
import _ from 'lodash';

import Config from '../config';

import allRoutes from "./routes/*";

const app = new Express();

const init = async () => {

  //Server route definations
  _.each(
    _.sortBy( allRoutes, [
      ({ route, url }) => {
        return url;
      }
    ] ).reverse(),
    ( { route, url } ) => {
      if ( url ) {
        app.use( url, route );
      } else {
        app.use( route );
      }
    }
  );
  //----------------------
};

init().then( () => {
  app.listen( Config['webapp_port'], () => {
    console.log( "Application running", `PORT: ${Config['webapp_port']}` )
  } );
} );
