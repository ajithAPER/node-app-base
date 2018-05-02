const Path = require( 'path' );

const serverPack = require( './server' );
const clientPack = require( './client' );

const dirArr = Path.join( __dirname ).split( '/' );
const directory = dirArr.splice( 0, dirArr.length - 2 ).join( '/' );

let modExport;

if ( process.env.RUN_ENV === 'client' ){
  modExport = clientPack( directory );
} else if ( process.env.RUN_ENV === 'server' ){
  modExport = serverPack( directory );
}

module.exports = modExport;
