'use strict';

// Module dependencies
var interviewsPolicy = require('../policies/interviews.server.policy'),
  interviews = require('../controllers/interviews.server.controller');

module.exports = function (app) {
  //Interviews collection routes
  app.route('/api/interviews').all(interviewsPolicy.isAllowed)
    .get(interviews.list)
    .post(interviews.create);

  // Single Interview routes
  app.route('/api/interviews/:interviewId').all(interviewsPolicy.isAllowed)
    .get(interviews.read)
    .put(interviews.update)
    .delete(interviews.delete);

  // Bind the interview to middleware
  app.param('interviewId', interviews.interviewByID);
};
