// LaunchRequest Handler
module.exports = function () {

  // Respond to User
  this.emit(':ask',
    'Welcome to Fitness Center. You can ask me for any exercises for core, upperbody or lowerbody or say help. What will it be?',
    'You can ask me for any exercises for Core, upperbody or lowerbody or say help. What will it be?'
  );
};
