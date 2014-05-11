Package.describe({
  summary: "Login service for Beats Music accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth2-helper', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files(
    ['beatsmusic_configure.html', 'beatsmusic_configure.js'],
    'client');
  
  api.add_files('beatsmusic_common.js', ['client', 'server']);
  api.add_files('beatsmusic_server.js', 'server');
  api.add_files('beatsmusic_client.js', 'client');
});
