'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RtsobjectSchema = new Schema({
  trend: String,
  date: Date,
  object: {},
  detail: {},
  publication: Date
});

module.exports = mongoose.model('Rtsobject', RtsobjectSchema);