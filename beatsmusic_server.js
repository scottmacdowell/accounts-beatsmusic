(function () {
  Meteor.accounts.beatsmusic.setSecret = function (secret) {
    Meteor.accounts.beatsmusic._secret = secret;
  };

  Meteor.accounts.oauth.registerService('beatsmusic', 2, function(query) {

    var accessToken = getAccessToken(query);
    var user_context = getUserID(accessToken);
    var identity = getIdentity(accessToken, user_context);
    
    return {
      options: {
		  services: {
			  beatsmusic: {
				  id: identity.id, 
				  accessToken: accessToken,
				  username: identity.username
		  }}
      },
      extra: {profile: {name: identity.full_name}}
    };
  });

  var getAccessToken = function (query) {
	  var config = Meteor.accounts.configuration.findOne({service: 'beatsmusic'});
	  if (!config)
		  throw new Meteor.accounts.ConfigError("Service not configured");
	  
	  var result = Meteor.http.post(
			  "https://partner.api.beatsmusic.com/v1/oauth2/authorize", {headers: {Accept: 'application/json'}, params: {
				  redirect_uri: Meteor.absoluteUrl("_oauth/github?close"),
				  client_id: config.clientId,
				  response_type: 'token',
				  state: query.state
			  }});
	  if (result.error) // if the http response was an error
		  throw result.error;
	  if (result.data.error) // if the http response was a json object with an error attribute
	      throw result.data;
	  return result.data.access_token;
  };

  //Call to get UserID
  var getUserID = function (accessToken) {
  	var result = Meteor.http.get(
  		"https://partner.api.beatsmusic.com/v1/api/me",
  		{params: {access_token: accessToken}});
  	if (result.error)
      throw result.error;
    return result.result.user_context; 	
  };

  //Call to get User Information
  var getIdentity = function (accessToken, user_context) {
    var result = Meteor.http.get(
      "https://partner.api.beatsmusic.com/v1/api/users/"+user_context,
      {params: {access_token: accessToken}});

    if (result.error)
      throw result.error;
    return result.data;
  };
}) ();