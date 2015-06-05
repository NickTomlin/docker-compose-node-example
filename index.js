'use strict';

var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var app = express();

app.use(session({
  store: new RedisStore({
    host: 'redis',
    port: 6379
  }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function (req, res) {
  req.session.count = parseInt(req.session.count || '0', 10) + 1;
  res.send('This message has been seen ' + req.session.count + ' times');
});

app.listen(5000, function () {
  console.log('App Listening at 5000');
})
