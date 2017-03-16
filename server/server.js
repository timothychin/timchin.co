const express = require('express');

// Middleware
const path = require('path');
const logger = require('morgan');
const http = require('http');
const fs = require('fs');

const port = 8000;
const app = express();

app.set('views', __dirname + '/../public');
app.set('scripts', __dirname + '/../node_modules');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/../public'))); 
app.use('/scripts', express.static(path.join(__dirname + '/../node_modules')));
app.get('/', function(req, res) {
  res.render('index');
});
// var app = http.createServer(function(req, res) {
//   fs.readFile('index.html', function(err, text) {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(text);
//   });
//   return;
//   res.setHeader("Content-Type", "text/html");
// });



app.listen(port);
console.log('Server is listening to Port ' + port + ' (★ω★)');