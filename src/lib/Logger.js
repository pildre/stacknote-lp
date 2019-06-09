import ReactGA from 'react-ga';

export default class Logger {
  static debug(message) {
    if (process.env.ENV !== 'production') {
      console.log(message);
    }
  }

  static error(message) {
    console.error(message);
  }

  static setTracker() {
    if (process.env.ENV === 'production') {
      ReactGA.initialize(process.env.GA_TRACKING_ID, {
        debug: false
      });
      if (typeof window !== 'undefined') {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
    }
  }

  static track(category, action) {
    Logger.debug(`Track, category: ${category}, action: ${action}`);
    if (process.env.ENV === 'production') {
      ReactGA.event({
        category: category,
        action: action
      });
    }
  }
}
