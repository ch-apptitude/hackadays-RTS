'use strict';

var _ = require('lodash');
var Tweet = require('./tweet.model');

// Get list of tweets
exports.index = function(req, res) {
  Tweet.find(function (err, tweets) {
    if(err) { return handleError(res, err); }
    return res.json(200, tweets);
  });
};

// Get a single tweet
exports.show = function(req, res) {
  Tweet.findById(req.params.id, function (err, tweet) {
    if(err) { return handleError(res, err); }
    if(!tweet) { return res.send(404); }
    return res.json(tweet);
  });
};

// Creates a new tweet in the DB.
exports.create = function(req, res) {
  Tweet.create(req.body, function(err, tweet) {
    if(err) { return handleError(res, err); }
    return res.json(201, tweet);
  });
};

// Updates an existing tweet in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tweet.findById(req.params.id, function (err, tweet) {
    if (err) { return handleError(res, err); }
    if(!tweet) { return res.send(404); }
    var updated = _.merge(tweet, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, tweet);
    });
  });
};

// Deletes a tweet from the DB.
exports.destroy = function(req, res) {
  Tweet.findById(req.params.id, function (err, tweet) {
    if(err) { return handleError(res, err); }
    if(!tweet) { return res.send(404); }
    tweet.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}