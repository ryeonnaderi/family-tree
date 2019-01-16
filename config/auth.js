// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '583592102081933', // your App ID
        'clientSecret'    : '5c8ec4d43f135768a719b6cea425240f', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },

    'twitterAuth' : {
        'consumerKey'        : '3YbcTJrDZIbcTRUZjAoeyKYKK',
        'consumerSecret'     : 'hXSUdUJNLmlY5qhemi2yIpFJGEOOIOLN2WgkYtBELdNk80hG0o',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '516986870938-59bfsscnj7v1a58p69dr64qdib5tgn5h.apps.googleusercontent.com',
        'clientSecret'     : 'jlp8PyvIf5lwbQCRVz7qI6PU',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};

