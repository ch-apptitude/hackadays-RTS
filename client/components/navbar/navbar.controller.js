'use strict';

angular.module('rtsHackdaysApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Tous',
      'link': '/'
    },{
      'title': 'Trends',
      'link': '/trends'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });