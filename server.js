var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

var mongoose = require('mongoose');
var Trunk = require('./models/trunk');
var Branch = require('./models/branch');
var config = require('./config');

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/trunks/new', function(req, res, next) {
  var body = req.body.body;
  var title = req.body.title;

  var parser = new xml2js.Parser();

  async.waterfall([
    function(callback) {
      callback(null, title, body);
    },
    function(title, body) {
        var trunk = new Trunk({
          title: title,
          body: body,
        });

        trunk.save(function(err) {
          if (err) return next(err);
          res.send({ message: title + ' has been added successfully!' });
        });
    }
  ]);
});

app.post('/api/branches/new', function(req, res, next) {
  var parent_id = req.body.parent
  var body = req.body.body;
  var title = req.body.title;

  var parser = new xml2js.Parser();

  async.waterfall([
    function(callback) {
      callback(null, parent_id, title, body);
    },
    function(parent_id, title, body) {
        var branch = new Branch({
          parent_id: parent_id,
          title: title,
          body: body,
        });

        branch.save(function(err) {
          if (err) return next(err);
          res.send({ message: title + ' has been added successfully!' });
        });
    }
  ]);
});

app.get('/api/trunks', function(req, res, next) {
  Trunk.find()
   .exec(function(err, trunks) {
      if (err) return next(err);

      if (trunks.length > 0) {
        return res.send(trunks);
      }

    });
});

app.get('/api/trunks/:id', function(req, res, next) {
  var id = req.params.id;

  async.waterfall([
    function(callback) {
      mongoose.model('Trunk').findById(id, function(err, trunk) {
        if (err) return next(err);

        if (!trunk) {
          return res.status(404).send({ message: 'Trunk not found.' });
        }
        callback(null, trunk);
      });
      },
      function(trunk) {
        mongoose.model('Branch').find({ parent_id: id }, function(err, branch) {
          if (err) return next(err);

          if (!trunk) {
            return res.status(404).send({ message: 'Trunk not found.' });
          }
          var data = [];
          data.push(trunk);
          data.push(branch);
          res.send(data);
      });
      }
  ]);
});

app.get('/api/branches/:id', function(req, res, next) {
  var id = req.params.id;

  async.waterfall([
    function(callback) {
      mongoose.model('Branch').findById(id, function(err, branch) {
        if (err) return next(err);

        if (!branch) {
          return res.status(404).send({ message: 'Branch not found.' });
        }
        callback(null, branch);
      });
      },
      function(branch) {
        mongoose.model('Branch').find({ parent_id: id }, function(err, branch_of_branch) {
          if (err) return next(err);

          if (!branch_of_branch) {
            return res.status(404).send({ message: 'Branch not found.' });
          }
          var data = [];
          data.push(branch);
          data.push(branch_of_branch);
          res.send(data);
      });
      }
  ]);
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});