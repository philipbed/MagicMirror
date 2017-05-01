/**
 * Created by philipbed813 on 5/1/17.
 */

// Dependenciess
const express = require( 'express' );
const path = require( 'path' );
const http = require( 'http' );
const bodyParser = require( 'body-parser' );


// Get Controller
const controller = require( './routes' );

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ) );

// point static files into 'dist' folder
app.use(express.static( path.join( __dirname, '../dist' ) ) );

// Send our route to our controller methods
app.use( "/app", controller );

// Send all other routes to the index page
app.get( "*", ( request, response ) => {
  response.sendFile( path.join( __dirname, '../dist/index.html' ) );
} );

// set port variable to the port that the app is currently running on or set to 3000
const port = process.env.PORT ? process.env.PORT : '3000';

app.set( 'port', port );

// Create the HTTP Server

const server = http.createServer( app );

server.listen( port, () => {
  console.log( `API running on http://localhost:${port}` );
} );
