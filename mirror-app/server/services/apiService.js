/**
 * Created by Philip Bedward on 5/2/17.
 */

/**
 * Class that contains methods that will be used by any controllers
 */
class MainService{


  /**
   * Format the current time as 'hour:minute:second'
   * @param dateObj - the javascript date object
   * @returns {time: string}
   */
  getFormattedTime( dateObj ){


    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // minutes and seconds under 10 should be prepended with a zero (i.e '02')
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    let strTime = hours + ':' + minutes + ':'+seconds+' ' + ampm;
    const timeObj = { "time":strTime };
    return timeObj;

  }
}

// export the class
module.exports = new MainService();
