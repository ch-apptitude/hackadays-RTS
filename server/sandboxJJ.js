var Twitter = require('twitter');
var request = require('request');
var moment = require('moment');
var _  = require('lodash');

var Tweet = require('./api/tweet/tweet.model');
var RtsObject = require('./api/rtsObject/rtsObject.model');
var RtsCuratedObject = require('./api/rtsCuratedObject/rtsCuratedObject.model');
var Trend = require('./api/trend/trend.model');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

var client = new Twitter({
  consumer_key: 'PWJrzGTw6KiP879aQx6VJgZBt',
  consumer_secret: 'AorsXTQGadMzMpPgAFcfsEjSGzEc8qhxnqQYKYgZqHM0U2S5E0',
  access_token_key: '1180685592-47K6sXogrumdydR0WOFi15le893cjpTZVxNMrEX',
  access_token_secret: 'O7ue20uDxftgNZTHRLXeao2e9aLmdAHmiPb9j8p9Ia5zj'
});
/*
 var july = moment().month('September');

 Tweet.find({
 'tweet.created_at' :  {$gt : july.startOf('month').toDate(), $lt: july.endOf('month').toDate()}
 })
 .sort('tweet.retweet_count')
 .limit(20)
 .exec(function () {
 console.log(arguments);
 })    */
var september = moment().month('September');
console.log(september.format());

var result = [];
/*RtsCuratedObject.aggregate({
  $group: {
    '_id': '$keyword.name',
    'name': {$first: '$keyword.name'},
    'date': {$first: '$keyword.date'},
    'category': {$first: '$keyword.category'},
    'order': {$first: '$keyword.order'},
    'items': {$push: '$item'}
  }
})
  .exec(function (e, r) {
    console.log(r);
  })      */


Trend.find({})
  .exec(function (error, trends) {
    _.each(trends, function (trend) {
       RtsObject.find({'trend': trend.name})
         .sort('-object.plays')
         .limit(3)
         .exec(function (error, rtsObjects) {
           _.each(rtsObjects, function (rtsObject) {
             console.log(rtsObject.trend, rtsObject.object.plays)
             RtsObject.find({
               'detail.related-content.mainMediaAttachment' : {$elemMatch: {url: rtsObject.object.url}}
             }).exec(function (e, r) {
               if (r && r.length) {
                 r = r[0];
                 var curated = {
                   date: trend.date,
                   keyword: trend,
                   active: true,
                   item: null
                 };
                 r.object.detail = r.detail;
                 curated.item = r.object;
                // RtsCuratedObject.create(curated, function (e) { console.log(e)})
               } else {
                 var curated = {
                   date: trend.date,
                   keyword: trend,
                   active: true,
                   item: null
                 };
                 rtsObject.object.detail = rtsObject.detail;
                 curated.item = rtsObject.object;
               //  RtsCuratedObject.create(curated, function (e) { console.log(e)})
               }
             })
           })
         })
    })
  })


//fetchAllTweets('RTSinfo');
//fetchAllTweets('RTSsport');
//fetchAllTweets('RadioTeleSuisse');


function fetchAllTweets(screenName) {
  var params = {screen_name: screenName, count: 200};
  getTimeline(params, afterGet);

  function afterGet(error, tweets) {
    console.log('fetching:', _.size(tweets));
    _.each(tweets, function (tweet) {
      Tweet.create(tweet, function () {})
    });
    if (tweets && tweets.length) {
      var lastTweet = tweets[_.size(tweets) - 1];
      if (moment(lastTweet.created_at).isAfter(moment().startOf('year'))) {
        var max_id = lastTweet.id_str;
        params.max_id = max_id;
        getTimeline(params, afterGet);
      } else {
        process.exit();
      }
    } else {
      process.exit();
    }
  }
}

function getTimeline(params, cb) {
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    cb(error, tweets);
  })
}


