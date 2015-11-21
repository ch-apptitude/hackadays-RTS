'use strict';

var _ = require('lodash');
var Rtsobject = require('./rtsObject.model');

// Get list of rtsObjects
exports.index = function(req, res) {
  Rtsobject.find({'detail': {$exists: false}})
   // .limit(20)
    .exec(function (err, rtsObjects) {
    if(err) { return handleError(res, err); }
    return res.json(200, rtsObjects);
  });
};
// Get list of rtsObjects
exports.drop = function(req, res) {
  Rtsobject.remove({}, function(err) {
    if(err) { return handleError(res, err); }
    return res.send(204);
  });

};

// Get a single rtsObject
exports.show = function(req, res) {
  Rtsobject.findById(req.params.id, function (err, rtsObject) {
    if(err) { return handleError(res, err); }
    if(!rtsObject) { return res.send(404); }
    return res.json(rtsObject);
  });
};

// Creates a new rtsObject in the DB.
exports.create = function(req, res) {
  Rtsobject.create(req.body, function(err, rtsObject) {
    if(err) { return handleError(res, err); }
    return res.json(201, rtsObject);
  });
};

// Updates an existing rtsObject in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Rtsobject.findById(req.params.id, function (err, rtsObject) {
    if (err) { return handleError(res, err); }
    if(!rtsObject) { return res.send(404); }
    var updated = _.merge(rtsObject, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, rtsObject);
    });
  });
};

// Deletes a rtsObject from the DB.
exports.destroy = function(req, res) {
  Rtsobject.findById(req.params.id, function (err, rtsObject) {
    if(err) { return handleError(res, err); }
    if(!rtsObject) { return res.send(404); }
    rtsObject.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}