// NPM Modules
const OpearloAnalytics = require('opearlo-analytics');

// Goodbye Handler
module.exports = function () {
 
  const randomGoodbyes = [
    'You have done a good workout today. See you tommorrow. Bye for now!',
    'I’m glad that you have done a good workout today. See you tommorrow. Bye for now!',
    'You have done a good workout today. Thanks for using Fitness Guru!',
    'Make fitness a habit. Be Fit. See you soon!'
  ];
 
  const randomGoodbye = randomGoodbyes[Math.floor(Math.random() * randomGoodbyes.length)];
 
  if (process.env.OPEARLO_USER_ID && process.env.OPEARLO_VOICE_APP_NAME && process.env.OPEARLO_API_KEY) {

    // Record Analytics
    OpearloAnalytics.recordAnalytics(this.event.session.user.userId, process.env.OPEARLO_API_KEY, () => {

      // Respond to User & Close Session
      this.emit(':tell', randomGoodbye);
    });
  }

  else { 
    this.emit(':tell', randomGoodbye);
  }
};
