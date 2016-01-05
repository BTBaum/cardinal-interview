'use strict';

// Configure the Creator Module
angular.module('interviews').run(['Menus',
  function (Menus) {
    // Add the creator dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Interview',
      state: 'interviews',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'interviews', {
      title: 'List Articles',
      state: 'interviews.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'interviews', {
      title: 'Create Articles',
      state: 'interviews.create',
      roles: ['user']
    });

  }]);
