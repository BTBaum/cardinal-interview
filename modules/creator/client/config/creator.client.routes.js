'use strict';

// Setting up routes
angular.module('creator').config(['$stateProvider',
  function ($stateProvider) {
    // Creator state routing
    $stateProvider
      .state('creator', {
        abstrat: true,
        url: '/creator',
        template: '<ui-view>'
      })
      .state('creator.list', {
        url: '',
        templateUrl: 'modules/creator/client/view/list-interviews.client.view.html'
      })
      .state('creator.create', {
        url: '/create',
        templateUrl: 'modules/creator/client/view/create-interview.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('creator.view', {
        url: '/:interviewId',
        templateUrl: 'modules/creator/client/view/view-interview.client.view.html'
      })
      .state('creator.edit', {
        url: '/:interviewId/edit',
        templateUrl: 'modules/creator/client/view/edit-interview.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
  }]);
