(function () {
	Meteor.loginWithBeatsmusic = function (callback) {
		var config = Meteor.accounts.configuration.findOne({service: 'beatsmusic'});
		if (!config) {
			callback && callback(new Meteor.accounts.ConfigError("Service not configured"));
			return;
		}
		var state = Meteor.uuid();
		
		var required_scope = ['user'];
		var scope = [];
		if (Meteor.accounts.beatsmusic._options && Meteor.accounts.beatsmusic._options.scope)
			scope = Meteor.accounts.beatsmusic._options.scope;
		scope = _.union(scope, required_scope);
		var flat_scope = _.map(scope, encodeURIComponent).join('+');
		
		var loginUrl =
		      'https://partner.api.beatsmusic.com/v1/oauth2/authorize' +
		      '?client_id=' + config.clientId +
		      '&response_type=token' +
		      '&scope=' + flat_scope +
		      '&redirect_uri=' + Meteor.absoluteUrl +
		      '&state=' + state;
		
		Meteor.accounts.oauth.initiateLogin(state, loginUrl, callback);
	};
}) ();
