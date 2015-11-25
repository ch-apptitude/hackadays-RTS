'use strict';

angular.module('rtsHackdaysApp')
  .controller('MainCtrl', function ($scope, $http, $sce) {

    $http.get('/api/rtsCuratedObjects/datas')
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
            "air france": { title: " #AirFrance fait un record de bénéfices mais la direction licencie. ", account: "@JLMelenchon" },
            "credit suisse": { title: "Credit #suisse to raise $6b as new #ceo rings changes #news #market #business http://j.mp/1QRJE5g", account: "@BusinessNewzzz" },
            "us open": { title: "This is the first time in 10 years that #Rafa will NOT win a Grand Slam.", account: "@usopen" },
            "volkswagen": { title: " #Volkswagen 1) il faut savoir si la France est aussi victime de cette manipulation 2) Une preuve de + que le diesel propre n'a jamais existé", account: "@delphinebatho" },
            "tianjin": { title: " #Breaking: Massive explosion rocks N China's #Tianjin, cause & casualties unclear yet (web sources) @BreakingNews ", account: "@XHNews" },
            "donald trump": { title: "Donald Trump is what happens when you tell a child all his ideas are special.", account: "@goldengateblond" },
            "tour de france": { title: "And the winner is... You chose @simongeschke's #TDF2015 stage win as the #KeepChallenging Victory of the Season! ", account: "@GiantAlpecin" },
            "wimbledon": { title: "Novak Djokovic is catching up with the greats... #Wimbledon", account: "@Wimbledon" },
            "iran": { title: "#IranDeal shows constructive engagement works. With this unnecessary crisis resolved, new horizons emerge with a focus on shared challenges.", account: "@HassanRouhani" },
            "wawrinka": { title: "That's it, you're the man @stanwawrinka. Bravo. #Wawrinka #stanimal ", account: "@evianwater" },
            "blatter fifa": { title: "Blatter to resign! FIFA must have gotten calls from the leaders of the free world: Coca-Cola, Visa, McDonald's, and Adidas!", account: "@Kasparov63" },
            "eurovision": { title: "“We are all heroes, no matter who we love or what we believe in” - Amen to that, Måns! #Eurovision", account: "@Eurovision" },
            "mayweather": { title: "Mayweather has hugged Manny more times than my dad has hugged me my whole life", account: "@DonaldGloverrr" },
            "roger federer": { title: "Thank you #Istanbul for an amazing week, it's been very special to play here!", account: "@rogerfederer" },
            "nepal": { title: "Terrible #earthquake in #Nepal. Just saved ourselves. Don't know how many killed. Roads are blocked already.", account: "@gunaraj" },
            "salt": { title: " The inside story behind the new Orange brand. http://www.ycn.org/inspiration/features/620-take-a-closer-look-at-the-orange-rebrand", account: "@RobertJones2" },
            "paleo": { title: "LIVE on #Periscope: Paléo Festival Nyon - Switzerland // tickets sale today !", account: "@PaleoFestival" },
            "montreux jazz": { title: "Programmation Montreux Jazz Festival 2015 #alabamashakes #LadyGaga #Toto #Santana #montreuxjazzfestival ", account: "@MFRemillard" },
          };
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
