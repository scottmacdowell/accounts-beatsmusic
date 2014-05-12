Accounts.oauth.registerService('beats_music');

if (Meteor.isClient) {
  Meteor.loginWithBeatsMusic = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Beats_Music.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.beats_music'],
    forOtherUsers: ['services.beats_music.id']
  });
}