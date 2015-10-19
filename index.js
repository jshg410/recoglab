/// <reference path="typings/node/node.d.ts"/>

var express = require('express');
var app = express();
var stormpath = require('stormpath');
var client = null;
var homedir = process.env.HOME;
var keyfile = homedir + '/Documents/workspace/recoglab/keys/apiKey.properties';
stormpath.loadApiKey(keyfile, function apiKeyFileLoaded(err, apiKey) {
  if (err) {
    console.log(err);
  }
 
  client = new stormpath.Client({apiKey: apiKey});
  /*client.getApplications({name:'RecogLab'}, function(err, applications){
  	if (err) throw err;

    app = applications.items[0];
    
    var account = {
      givenName: 'Joe',
      surname: 'Stormtrooper',
      username: 'tk455',
      email: 'stormtrooper@stormpath.com',
      password: 'Changeme1',
      customData: {
        favoriteColor: 'white',
      },
    };

    // Create a Stormpath Account.
    app.createAccount(account, function(err, account) {
      if (err) throw err;

      console.log('Account created!');
      console.log('Account givenName: ' + account.givenName);
      console.log('Account surname: ' + account.surname);

      // Search for Account by email.
      app.getAccounts({email: 'stormtrooper@stormpath.com'}, function(err, accounts) {
        if (err) throw err;

        accounts.each(function (err, account, index) {
          //console.log(account);
        });
      });

      // Authenticate Account by username / password.
      app.authenticateAccount({
        username: 'tk455',
        password: 'Changeme1',
      }, function (err, result) {
        if (err) throw err;
        console.log('Successfully authenticated account using username!');
      });
    });
	});*/
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/register', function(request, response) {
  response.render('pages/register');
});

app.get('/login', function(request, response) {
  response.render('pages/login');
});

app.get('/hi', function(request, response) {
  fb.set('hi');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
