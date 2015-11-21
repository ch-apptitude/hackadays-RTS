'use strict';

var _ = require('lodash');
var Rtscuratedobject = require('./rtsCuratedObject.model');

// Get list of rtsCuratedObjects
exports.index = function(req, res) {
  Rtscuratedobject.find(function (err, rtsCuratedObjects) {
    if(err) { return handleError(res, err); }
    return res.json(200, rtsCuratedObjects);
  });
};

// Get a single rtsCuratedObject
exports.show = function(req, res) {
  Rtscuratedobject.findById(req.params.id, function (err, rtsCuratedObject) {
    if(err) { return handleError(res, err); }
    if(!rtsCuratedObject) { return res.send(404); }
    return res.json(rtsCuratedObject);
  });
};

// Creates a new rtsCuratedObject in the DB.
exports.create = function(req, res) {
  Rtscuratedobject.create(req.body, function(err, rtsCuratedObject) {
    if(err) { return handleError(res, err); }
    return res.json(201, rtsCuratedObject);
  });
};

// Updates an existing rtsCuratedObject in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Rtscuratedobject.findById(req.params.id, function (err, rtsCuratedObject) {
    if (err) { return handleError(res, err); }
    if(!rtsCuratedObject) { return res.send(404); }
    var updated = _.merge(rtsCuratedObject, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, rtsCuratedObject);
    });
  });
};

// Deletes a rtsCuratedObject from the DB.
exports.destroy = function(req, res) {
  Rtscuratedobject.findById(req.params.id, function (err, rtsCuratedObject) {
    if(err) { return handleError(res, err); }
    if(!rtsCuratedObject) { return res.send(404); }
    rtsCuratedObject.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}