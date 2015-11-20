'use strict';

angular.module('rtsHackdaysApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trends', {
        url: '/trends',
        templateUrl: 'app/trends/trends.html',
        controller: 'TrendsCtrl'
      });
  });