'use strict';
//Module dependencies
var acl = require('acl');
// Using the memory backend
acl = new acl(new acl.memoryBackend());
// Invoke Interviews Permissions
exports.invokeRolesPolicies = function () {
  acl.allow([{
    roles: ['admin'],
    allows: [{
      resources: '/api/interviews',
      permissions: '*'
    },
    {
      resources: '/api/interviews/:interviewId',
      permissions: '*'
    }]
  },
  {
    roles: ['user'],
    allows: [{
      resources: '/api/interviews',
      permissions: ['get', 'post']
    },
    {
      resources: '/api/interviews/:interviewId',
      permissions: ['get']
    }]
  },
  {
    roles: ['guest'],
    allows: [{
      resources: '/api/interviews',
      permissions: ['get']
    },
    {
      resources: '/api/interviews/:interviewId',
      permissions: ['get']
    }]
  }]);
};
