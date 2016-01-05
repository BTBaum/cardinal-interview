'use strict';

// Module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Interview Schema
var InterviewSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  question: {
    type: String,
    default: '',
    trim: true,
    required: 'Question cannot be blank'
  },
  answer: {
    type: String,
    default: '',
    trim: true,
    required: 'Answer cannot be blank'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Interview', InterviewSchema);
