let config;

if ( process.env.RUN_ENV === 'server' ){
  config = Object.assign( {}, require( './public' ).default, require( './private' ).default );
} else {
  config = Object.assign( {}, require( './public' ).default );
}

export default config;
