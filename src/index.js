// NPM Modules
const Alexa = require('alexa-sdk');
const OpearloAnalytics = require('opearlo-analytics');

// Handlers
const LaunchRequest = require('./handlers/LaunchRequest');
const Upperbody = require('./handlers/Upperbody');
const Core = require('./handlers/Core');
const Lowerbody = require('./handlers/Lowerbody'); 
const AmazonHelpIntent = require('./handlers/AmazonHelpIntent');
const AmazonYesIntent = require('./handlers/AmazonYesIntent');
const AmazonRepeatIntent = require('./handlers/AmazonRepeatIntent');
const Goodbye = require('./handlers/GoodBye');
const Unhandled = require('./handlers/Unhandled');
const SessionEndedRequest = require('./handlers/SessionEndedRequest');

// Handlers
const handlers = {
  LaunchRequest,
  Upperbody,
  Core,
  Lowerbody, 
  'AMAZON.HelpIntent': AmazonHelpIntent,
  'AMAZON.YesIntent': AmazonYesIntent,
  'AMAZON.NoIntent': Goodbye,
  'AMAZON.RepeatIntent': AmazonRepeatIntent,
  'AMAZON.StopIntent': Goodbye,
  'AMAZON.CancelIntent': Goodbye,
  Unhandled,
  SessionEndedRequest,
};

// Lambda Event Handler
exports.handler = function (event, context) {

  // Log Request
  console.log('Alexa Request: ', JSON.stringify(event)); // eslint-disable-line no-console

  // Opearlo Analytics
  if (process.env.OPEARLO_USER_ID && process.env.OPEARLO_VOICE_APP_NAME && process.env.OPEARLO_API_KEY) {

    // Intialise on New Session
    if (event.session.new) {
      OpearloAnalytics.initializeAnalytics(process.env.OPEARLO_USER_ID, process.env.OPEARLO_VOICE_APP_NAME, event.session);
    }

    // Track Launch Requests
    if (event.request.type === 'LaunchRequest') {
      OpearloAnalytics.registerVoiceEvent(event.session.user.userId, 'LaunchRequest');
    }

    // Track Intent Requests
    if (event.request.type === 'IntentRequest') {
      OpearloAnalytics.registerVoiceEvent(event.session.user.userId, 'IntentRequest', event.request.intent);
    }
  }

  // Create Alexa-SDK Object
  const alexa = Alexa.handler(event, context);

  // Alexa-SDK Properties
 // alexa.appId = "amzn1.ask.skill.79f483d8-e088-49ef-91d2-cefa06c9b197";

  // Register Handlers and Process Event
  alexa.registerHandlers(handlers);

  alexa.execute();
};
