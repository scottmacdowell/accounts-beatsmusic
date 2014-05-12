Package.describe({
  summary: "Beats Music OAuth2 login service for use with Meteor Auth"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('BeatsMusic', ['client', 'server']);

  api.add_files('beats_music_login_button.css', 'client');

  api.add_files("beats_music.js");
});