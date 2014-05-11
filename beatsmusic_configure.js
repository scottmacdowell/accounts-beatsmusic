Template.configureLoginServicesDialogForBeatsmusic.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServicesDialogForBeatsmusic.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client secret'}
  ];
};