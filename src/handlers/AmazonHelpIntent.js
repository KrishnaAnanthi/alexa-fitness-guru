// AMAZON.HelpIntent Handler
module.exports = function () {

  // Response
  var helpResponse = 'You can select any of the exercise for Upperbody, Core or Lowerbody. What would you like to do?';

  // Save Last Response for use in Repeat
  this.attributes.lastResponse = helpResponse;

  // Respond to User
  this.emit(':ask', helpResponse, helpResponse);
};
