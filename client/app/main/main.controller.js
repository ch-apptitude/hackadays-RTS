'use strict';

angular.module('rtsHackdaysApp')
  .controller('MainCtrl', function ($scope, $http, $sce) {
    /*$scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };*/

    $scope.getItemDetails = function(url) {
     /* $http.get(url).success(function(itemDetails) {
        return "tutu";  
      });
      */
    };  

    $scope.player = {
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
          poster: "http://www.videogular.com/assets/images/videogular.png"
        }
    };

    $scope.months = [
      { date:     new Date(2015, 0),
        keywords: [
          {
            name:       "CharlieHebdo",
            category:   "Monde",
            order:      0,
            items: [
            {
              "id": 7270470,
              "json": "http:\/\/www.rts.ch\/a\/7270470.html?f=json\/article&v=1.1",
              "title": "Bains chauds de Beaujolais Nouveau au Japon",
              "intro": "Les Japonais amateurs de vins fran\u00e7ais ont c\u00e9l\u00e9br\u00e9 l'arriv\u00e9e du nouveau mill\u00e9sime et ont aussi rendu hommage aux victimes des attentats de Paris en observant une minute de silence.",
              "contentType": "video",
              "url": "http:\/\/www.rts.ch\/video\/info\/journal-continu\/7270470-bains-chauds-de-beaujolais-nouveau-au-japon.html",
              "articleType": "video",
              "img": "http:\/\/www.rts.ch\/2015\/11\/20\/09\/18\/7270472.image",
              "creation": "2015-11-20T08:18:00Z",
              "publication": "2015-11-20T08:18:02Z",
              "modification": "2015-11-20T11:21:28Z",
              "program": "Le Journal en continu",
              "channel": "RTS.ch",
              "duration": "0:34",
              "video": "standard",
              "cutin": 0,
              "cutout": 34.96,
              "cut": false,
              "plays": 35,
              "geoloc": "ww",
              "lmgId": 7270469,
              "isPlayable": true,
              "details": {
                "preview_image_url": "http:\/\/www.rts.ch\/2015\/11\/20\/09\/18\/7270472.image?w=480&h=270",
                "streams": {
                  "hds": "http:\/\/rtsww-f.akamaihd.net\/z\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,1201,k.mp4.csmil\/manifest.f4m",
                  "tv": "http:\/\/rtsww-d.rts.ch.edgesuite.net\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-1201k.mp4",
                  "hds_sd": "http:\/\/rtsww-f.akamaihd.net\/z\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,k.mp4.csmil\/manifest.f4m",
                  "download": "http:\/\/download-video.rts.ch\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-1201k.mp4",
                  "hls_sd": "http:\/\/stream-i.rts.ch\/i\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,k.mp4.csmil\/master.m3u8",
                  "hls": "http:\/\/stream-i.rts.ch\/i\/info\/2015\/11\/journal_20151120_standard_1e5f3c1c3d984888a6160fcfd1e88a7d-,101,251,301,701,1201,k.mp4.csmil\/master.m3u8"
                },
              }
            },
          ]
        }
      ]
      },
      {date: new Date(2015, 1)},
      {date: new Date(2015, 2)},
      {date: new Date(2015, 3)},
      {date: new Date(2015, 4)},
      {date: new Date(2015, 5)},
      {date: new Date(2015, 6)},
      {date: new Date(2015, 7)},
      {date: new Date(2015, 8)},
      {date: new Date(2015, 9)},
      {date: new Date(2015, 10)},
      {date: new Date(2015, 11)},
    ];


    // Iterate over everything to prepare our data set
    _.forEach($scope.months, function(month) {

      _.forEach(month.keywords, function(keyword) {

          _.forEach(keyword.items, function(item) {

            // Prepare streams for Video Player src
            if(item.details && item.details.streams){
              item.details.streams._src = [{src: item.details.streams.tv, type: 'video/mp4'}];
            }
          });
      });
    });
  });
