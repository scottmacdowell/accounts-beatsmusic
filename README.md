## accounts-beatsmusic

Beats Music OAuth2 login service for use with Meteor Auth

### Package Dependencies

This login service depends on the bleeding edge changes within the Meteor Auth branch. See [https://github.com/meteor/meteor/wiki/Getting-started-with-Auth](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth) for further details.

* accounts ([Meteor Auth Branch](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth))
* accounts-oauth2-helper ([Meteor Auth Branch](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth))
* http

### Usage

1. `meteor add accounts-beatsmusic`
2. Read the 'Integrating with Login Services' section of [Getting Started with Auth](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth) and make sure you set up your config and secret correctly.
3. Call `Meteor.loginWithBeatsmusic();`

### Credits

* Shamelessly based upon [@Jabbslad](https://github.com/Jabbslad) Accounts-GitHub... which is based upon [@possibilities](https://github.com/possibilities) Google OAuth2 login service and 
