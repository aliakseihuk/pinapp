var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: 'W1GWVC1st7Uv4H59kXhyz0RfjbN4xlfp', domain: 'aliakseihuk.eu.auth0.com'});

lock.show({}, (err, profile, token) => {
  if (err) {
    console.log(err);
    return;
  }
  // Authentication worked!
  console.log('Logged in with Auth0!');
});