'use strict';

var _ = require('lodash');
var moment = require('moment');
var Rtscuratedobject = require('./rtsCuratedObject.model');
var RtsObject = require('../rtsObject/rtsObject.model');

// Get list of rtsCuratedObjects
exports.index = function(req, res) {
  Rtscuratedobject.find(function (err, rtsCuratedObjects) {
    if(err) { return handleError(res, err); }
    return res.json(200, rtsCuratedObjects);
  });
};

exports.datas = function(req, res) {
  Rtscuratedobject.find({})
    .exec(function (err, rtsCuratedObjects) {
    if(err) { return handleError(res, err); }
    
    var aggregatedCuratedObjects = [];
    var asyncCount = _.size(rtsCuratedObjects);
    _.forEach(rtsCuratedObjects, function(rtsCuratedObject, key){



      RtsObject.aggregate({
          $match: {trend: rtsCuratedObject.keyword.name}
        },   {
          $project: {
            day: {
              years: {$year: '$publication'},
              months: {$month: '$publication'},
              days: {$dayOfMonth: '$publication'}
            }
          }
        },
        {
          $group: {
            _id: "$day",
            count: {$sum: 1}
          }

        })
        .exec(function (e, result) {
          var date         = moment(rtsCuratedObject.date).format('YYYY-MM-DD');
          var currentMonth = _.findWhere(aggregatedCuratedObjects, { 'date': date });
          var name         = rtsCuratedObject.keyword.name;

          var startMonth = moment(date).startOf('month').dayOfYear();
          var endMonth = moment(date).endOf('month').dayOfYear();
          var numberOfDay = endMonth - startMonth + 1;
          var trends = [];
          for (var i = 0; i < numberOfDay; i++) {
            trends[i] = 0;
          }
          _.each(result, function (res) {
            trends[res._id.days - 1] = res.count;
          })
          if(!currentMonth){
            currentMonth          = {};
            currentMonth.date     = date;
            currentMonth.keywords = [];
            aggregatedCuratedObjects.push(currentMonth);
          }

          var currentKeyword = _.findWhere(currentMonth.keywords, { 'name': name });

          if(!currentKeyword){
            var currentKeyword        = {};
            currentKeyword.name       = name;
            currentKeyword.trends     = trends;
            currentKeyword.category   = rtsCuratedObject.keyword.category;
            currentKeyword.order      = rtsCuratedObject.keyword.order;
            currentKeyword.items      = [];

            currentMonth.keywords.push(currentKeyword);
          }

          var item      = rtsCuratedObject.item;
          item.details  = {streams: item.detail.streams};

          if(item.details){
            item.details.preview_image_url = item.detail.preview_image_url;
          }

          if(item.detail.body){
            item.body = item.detail.body;
          }

          currentKeyword.items[item.order] = item;
          asyncCount = asyncCount - 1;
          if (!asyncCount) {
            rtsCuratedObjects =  _.sortByOrder(aggregatedCuratedObjects, 'date',['desc']);

            // return array
            return res.json(200, rtsCuratedObjects);
          }
        });




    });


  })

}

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


/*
function aggregateCuratedObjects(rtsCuratedObject)
{
  //agregatedCuratedObjects.push =
  var currentMonth = _.findWhere(aggregatedCuratedObjects, { 'date': moment(rtsCuratedObject.date).format('YYYY-MM-DD') });

  if(!currentMonth){
    currentMonth = {};
    currentMonth.date = moment(rtsCuratedObject.date).format('YYYY-MM-DD');
    currentMonth.keywords = [];
    aggregatedCuratedObjects.push(currentMonth);
  }

  var currentKeyword = _.findWhere(currentMonth.keywords, { 'name': rtsCuratedObject.keyword.name });

  if(!currentKeyword){
    var currentKeyword = {};
    currentKeyword.name  = rtsCuratedObject.keyword.name;
    currentKeyword.trends = [4,355,2,4,12,20,58,1,1,0,1,48,12,7,8,5,6,1,3,48,12,7,8,5,6,1,3];
    currentKeyword.category = rtsCuratedObject.keyword.category;
    currentKeyword.order = rtsCuratedObject.keyword.order;
    currentKeyword.items = [];
    currentMonth.keywords.push(currentKeyword);
  }

  var item = rtsCuratedObject.item;

  item.details = item.detail.streams;
  if(item.details){
    item.details.preview_image_url = item.detail.preview_image_url;
  }

  currentKeyword.items.push(item);
}
*/