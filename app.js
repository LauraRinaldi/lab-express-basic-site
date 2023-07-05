// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// ...
// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// nurse route:
app.get('/nurse', (request, response, next) => response.sendFile(__dirname + '/views/monica-page.html'));
// work rout:
// nurse route:
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work-page.html'));
// ...

// Server Started
app.listen(3000, () => console.log('App listening on port 3000! '));
