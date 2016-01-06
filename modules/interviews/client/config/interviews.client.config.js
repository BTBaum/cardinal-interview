'use strict';

// Configure the Interview Module
angular.module('interviews').run(['Menus',
  function (Menus) {
    // Add the Interview dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Interview',
      state: 'interviews',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'interviews', {
      title: 'List Interviews',
      state: 'interviews.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'interviews', {
      title: 'Create Interviews',
      state: 'interviews.create',
      roles: ['user']
    });

  }]);
