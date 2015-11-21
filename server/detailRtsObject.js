var request = require('request');
var _ = require('lodash');
var moment = require('moment');

var rtsEndPoint = "http://www.rts.ch/?f=json/list&v=1.1";
var ngRocksEndPoint = "http://hackdays.ngrok.com/api/";


request(ngRocksEndPoint+'rtsObjects', function (error, response) {

  var rtsObjects 	= JSON.parse(response.body);
  _.forEach(rtsObjects, function(rtsObject, key){
				generateDetailForObject(rtsObject);
  });

});

function generateDetailForObject(rtsObject){
		var objectType = rtsObject.object.contentType;
		var jsonUrl    = rtsObject.object.json;

		if(!rtsObject.detail){
	  	console.log('Add detail to a not detailed article');
	  			request( jsonUrl, function (error, response) {
					  var detail 	= JSON.parse(response.body);

					  if(detail['related-content']){
					  		delete detail['related-content'].parentBroadcastAttachment;
					  }

					  console.log(detail);

					  rtsObject.detail = detail;

					  var options = {
					  	uri: ngRocksEndPoint+"rtsObjects/"+rtsObject._id,
					  	method: 'PUT',
					  	json: rtsObject
						};

						request(options, function (error, response, body) {
						  if (!error && response.statusCode == 200) {
						    console.log('rtsObject Updated: '+rtsObject._id);
						 }
						});
		});

	  }		
}
