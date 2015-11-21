'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TweetSchema = new Schema({
  favorited: Boolean,
  retweeted: Boolean,
  truncated: Boolean,
  created_at: Date,
  id_str: String,
  entities: {},
  extended_entities: {},
  lang: String,
  possibly_sensitive: Boolean,
  favorite_count: Number,
  retweet_count: Number,
  is_quote_status: Boolean,
  contributors: {},
  coordinates: {},
  place: {},
  geo: {},
  user: {},
  in_reply_to_screen_name: String,
  in_reply_to_user_id_str: String,
  in_reply_to_user_id: String,
  in_reply_to_status_id_str: String,
  in_reply_to_status_id: String,
  source: String,
  text: String

});

module.exports = mongoose.model('Tweet', TweetSchema);