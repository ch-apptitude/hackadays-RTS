'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RtscuratedobjectSchema = new Schema({
  date: Date,
  keyword: {},
  item: {},
  active: Boolean
});

module.exports = mongoose.model('Rtscuratedobject', RtscuratedobjectSchema);