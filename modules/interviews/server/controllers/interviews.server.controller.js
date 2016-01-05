'use strict';

// Module dependencies
var path = require('path'),
    mongoose = require('mongoose'),
    Interview = mongoose.model('Interview'),
    errorHandler = require(path.resolve('./module/core/server/controllers/errors.server.controller'));

// Create an Interview
exports.create = function (req, res) {
  var interview = new Interview(req.body);
  interview.user = req.user;

  interview.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(interview);
    }
  });
};

// Show the current Interview
exports.read = function (req, res) {
  res.json(req.interview);
};

// Update Interview
exports.update = function (req, res) {
  var interview = req.interview;

  interview.title = req.body.title;
  interview.question = req.body.question;
  interview.answer = req.body.answer;

  interview.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(interview);
    }
  });
};

// Delete Interview
exports.delete = function (req, res) {
  var interview = req.interview;

  interview.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(interview);
    }
  });
};

// List of Interviews
exports.interviewByID = function (req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Interview is invalid'
    });
  }

  Interview.findById(id).populate('user', 'displayName').exec(function (err, interview) {
    if (err) {
      return next(err);
    } else if (!interview) {
      return res.status(400).send({
        message: 'No interview with that identifier has been found'
      });
    }
    req.interview = interview;
    next();
  });
};
