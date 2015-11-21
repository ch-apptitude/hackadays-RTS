'use strict';

angular.module('rtsHackdaysApp')
  .controller('TrendsCtrl', function ($scope, $http) {
    $scope.trends = [];
    $http.get('http://hackdays.ngrok.com/api/trends')
      .then(function (trends) {
        $scope.trends = trends.data || [];
      });

    $scope.addTrend = addTrend;
    $scope.removeTrend = removeTrend;
    $scope.updateTrend = updateTrend;
    $scope.openDatePicker = openDatePicker;
    $scope.newTrend = {};


    function openDatePicker(trend) {
      trend.pickerOpened  = !trend.pickerOpened;
      console.log('pickerOpened')
    }

    function addTrend(trend) {
      $scope.loading = true;
      $http.post('http://hackdays.ngrok.com/api/trends', trend)
        .then(function (response) {
          $scope.trends.push(response.data);
          $scope.newTrend = {};
          $scope.loading = false;
        })
    }

    function removeTrend(trend) {
      $scope.loading = true;

      $http.delete('http://hackdays.ngrok.com/api/trends/' + trend._id)
        .then(function () {
          var i = $scope.trends.indexOf(trend);
          $scope.trends.splice(i, 1);
          $scope.loading = false;
        })
    }

    function updateTrend(trend) {
      $scope.loading = true;
      console.log(trend);

      $http.put('http://hackdays.ngrok.com/api/trends/' + trend._id, trend)
        .then(function () {
          $scope.loading = false;
        })
    }
    $scope.message = 'Hello';
  });
