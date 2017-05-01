/**
 * Created by philipbed813 on 5/1/17.
 */

/**
 * The main functionality for the application is contained in this class
 */
class MainController{

  index( request, response ){

    response.send( "API from Express works" );

  }

  time( request, response ){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    const timeObj = { "time":strTime };

    response.status( 200 ).json( timeObj );

  }
}



module.exports = new MainController();


