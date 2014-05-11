if (!Meteor.accounts.beatsmusic) {
	Meteor.accounts.beatsmusic = {};
}

Meteor.accounts.beatsmusic.config = function(options) {
	Meteor.accounts.beatsmusic._options = options;
};