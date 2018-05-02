import PublicConfig from './public';
import PrivateConfig from './private';

let config;

if ( process.env.RUN_ENV === 'server' ){
  config = Object.assign( {}, PublicConfig, PrivateConfig );
} else {
  config = Object.assign( {}, PublicConfig );
}

export default config;
