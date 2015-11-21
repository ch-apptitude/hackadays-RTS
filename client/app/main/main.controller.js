'use strict';

angular.module('rtsHackdaysApp')
  .controller('MainCtrl', function ($scope, $http, $sce) {

    $http.get('http://hackdays.ngrok.com/api/rtsCuratedObjects/datas')
      .then(function (response) {
        var month = response.data;

        $scope.months = transformData(month);

        /*$http.get('http://0e537a34.ngrok.io/api/tweets/recommended?category=')
         .then(function(tweets) {
            
            var tweets =  tweets.data;
            //console.log(month);
            _.forEach(tweets, function(tw) {
              var m = _.findWhere(month, {date: moment(tw.date).format('YYYY-MM-DD')});

              if(m) {
                _.forEach(tw.keywords, function(k) {
                  m.keywords.push(k);  
              });
                
              }
            });

            $scope.months = transformData(month);
         });
        */

        $scope.tweets = 
          {
            "air france": { title: " blabablalb", account: "@rhalloran" },
            "credit suisse": { title: " blabablalb", account: "@rhalloran" },
            "us open": { title: " blabablalb", account: "@rhalloran" },
            "air france": { title: " blabablalb", account: "@rhalloran" },
            "volkswagen": { title: " blabablalb", account: "@rhalloran" },
          }
      });


    function transformData(datas) {

      //console.log(datas);

      // Iterate over everything to prepare our data set
      _.forEach(datas, function (month, k) {

        _.forEach(month.keywords, function (keyword, j) {

          _.forEach(keyword.items, function (item, i) {

            // Set collapsed by defaut
            item.isCollapsed = true;

            // Transform to JS date
            item.publication = moment(item.publication).toDate();

            // Store the first Item
            if (i == 0) {
              keyword.mainArticle = item;
            }

            // Prepare streams for Video Player src
            if (item.details && item.details.streams) {
              item.details.streams._src = [
                {src: item.details.streams.tv, type: 'video/mp4'}
              ];
            }
          });
        });
      });

      return datas;
    }
  });
