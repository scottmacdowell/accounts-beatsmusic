Accounts.oauth.registerService('beats_music');

if (Meteor.isClient) {
  Meteor.loginWithBeats_music = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
      console.log(2);
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Beats_Music.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.beats_music'],
    forOtherUsers: ['services.beats_music.id']
  });
}