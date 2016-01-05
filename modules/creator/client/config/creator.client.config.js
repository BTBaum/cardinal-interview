'use strict';

// Configure the Creator Module
angular.module('creator').run(['Menus',
  function (Menus) {
    // Add the creator dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Create Interview',
      state: 'creator',
      type: 'dropdown',
      roles: ['*']
    });
  }]);
