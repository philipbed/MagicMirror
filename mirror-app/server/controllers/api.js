/**
 * Created by Philip Bedward on 5/1/17.
 */

let mainService = require('../services/apiService');

/**
 * The main functionality for the application is contained in this class
 */
class MainController{

  /**
   * Respond to the request with a json object
   * @param request - the HTTP request object
   * @param response - the HTTP response object
   */

  time( request, response ){
    let date = new Date();
    const timeObj = mainService.getFormattedTime( date );
    response.status( 200 ).json( timeObj );
  }
}

// export the controller
module.exports = new MainController();


