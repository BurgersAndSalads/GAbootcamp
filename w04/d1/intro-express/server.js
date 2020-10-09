// Load express
const express = require('express');

// Create our express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes
//  HTTP HANDLERS!!!!

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function(req, res) {
  res.send('<h1>Hello Express is awesome!!!!!!</h1>');
});

app.get('/users', function(req, res) {
  const myPage = '<h1>USER PAGE</h1>';
  res.send(myPage);
});

app.get('/home', function(req, res) {
  res.send('<h1>Home PAge</h1>');
});

// BE CAREFUL!!!!!!!!!!!

app.get('/cars', function(req, res) {
  res.send("Here's a list of my cars...");
});

app.post('/cars', function(req, res) {
  res.send('Thanks for the new car!');
});

//  START THE SERVER!!!!!

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
