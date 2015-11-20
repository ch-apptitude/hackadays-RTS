'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TrendSchema = new Schema({
  name: String,
  date: Date,
  category: [String],
  order: Number,
  type: String,
  active: Boolean
});

module.exports = mongoose.model('Trend', TrendSchema);