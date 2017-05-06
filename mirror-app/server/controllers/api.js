/**
 * Created by philipbed813 on 5/1/17.
 */

let mainService = require('../services/apiService');

/**
 * The main functionality for the application is contained in this class
 */
class MainController{

  index( request, response ){

    response.send( "API from Express works" );

  }

  time( request, response ){
    let date = new Date();
    () => {fedfefef;fefef;fefe;}
    const timeObj = mainService.getFormattedTime( date );

    response.status( 200 ).json( timeObj );
  }
}


module.exports = new MainController();


