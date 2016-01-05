'use strict';

// Setting up routes
angular.module('interviews').config(['$stateProvider',
  function ($stateProvider) {
    // Creator state routing
    $stateProvider
      .state('interviews', {
        abstrat: true,
        url: '/interviews',
        template: '<ui-view>'
      })
      .state('interviews.list', {
        url: '',
        templateUrl: 'modules/interviews/client/view/list-interviews.client.view.html'
      })
      .state('interviews.create', {
        url: '/create',
        templateUrl: 'modules/interviews/client/view/create-interview.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('interviews.view', {
        url: '/:interviewId',
        templateUrl: 'modules/interviews/client/view/view-interview.client.view.html'
      })
      .state('interviews.edit', {
        url: '/:interviewId/edit',
        templateUrl: 'modules/interviews/client/view/edit-interview.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
  }]);
