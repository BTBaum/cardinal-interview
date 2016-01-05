'use strict';

// Interviews service used for communicating with the interviews REST endpoints
angular.module('interviews').factory('Interviews', ['$resource',
  function ($resource) {
    return $resource('api/interviews/:interviewId', {
      interviewId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

  }]);
