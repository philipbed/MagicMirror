/**
 * Created by philipbed813 on 5/1/17.
 */

// imports
const express = require( 'express' );
const router = express.Router();
const mainCtrl = require( './controllers/api' );


// time route
router.get( "/time", mainCtrl.time );

// export routes
module.exports = router;
