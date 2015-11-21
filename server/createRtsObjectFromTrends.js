var request = require('request');
var _ = require('lodash');
var moment = require('moment');

var rtsEndPoint = "http://www.rts.ch/?f=json/list&v=1.1";
var ngRocksEndPoint = "http://hackdays.ngrok.com/api/";
var numberOfRecord = 0;
var rtsTypes = ['video','audio', 'image', 'infoSport', 'article'];


request(ngRocksEndPoint+'trends', function (error, response) {

  var trends 		 	= response.body;
  var jsonTrends 	= JSON.parse(trends);

  _.forEach(jsonTrends, function(trend, key){
  	if(trend.active){
  		 pullTrendsFromAPI(trend);
  	}
  });

});


function pullTrendsFromAPI(trend){
	_.forEach(rtsTypes, function(rtsType, key){
		var url = forgeAPIUrl(trend.name, trend.date, 1, 1, rtsType);

		request( url, function (error, response) {
			var numberOfItems = JSON.parse(response.body).count;
			var callNumber = Math.floor( numberOfItems / 100); //Limit maximum is 100 in RTS API so we endd to do multiple calls
			if(numberOfItems % 100 != 0){
				callNumber ++;
			}

			for (var i = 0; i < callNumber; i++) {
					fetchUrl = forgeAPIUrl(trend.name, trend.date, 100, i+1, rtsType);
					console.log('RTS type', rtsType);
					console.log('With url', fetchUrl);
					fetchRTSItems(trend, fetchUrl);
			};

		});
	});
}

function forgeAPIUrl(keyword,date,limit,page,type){
		limit   = limit || 100;
		page    = page  || 1;
		type    = type  || 'video';
		keyword = keyword.split(' ').join('+');

		var from    = moment(date).format('YYYY-MM-DD%20hh:mm');
		var to 			= moment(date).endOf('month').format('YYYY-MM-DD%20hh:mm');

		var url = rtsEndPoint+"&keyword="+keyword+"&from="+from+"&to="+to+"&limit="+limit+"&page="+page+"&type="+type;

		return url;
}


function fetchRTSItems(trend, url){
	request( url, function (error, response) {
			var jsonResponse = JSON.parse(response.body);

			_.forEach(jsonResponse.list, function(item, key){

				var rtsObject = {
					 'trend': trend.name,
					 'date' : trend.date,
					 'object': item
				}
				
				pushRtsObjectOnServer(rtsObject);
			});

	});
}

function pushRtsObjectOnServer(rtsObject){
	var options = {
		  uri: ngRocksEndPoint+"rtsObjects/",
		  method: 'POST',
		  json: rtsObject
	};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 201) {
    console.log('rtsObject Created');
  }
});
}


