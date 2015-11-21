var request = require('request');
var _ = require('lodash');
var moment = require('moment');

var rtsEndPoint = "http://www.rts.ch/?f=json/list&v=1.1";
var ngRocksEndPoint = "http://hackdays.ngrok.com/api/";
var agregatedCuratedObjects = [];




request(ngRocksEndPoint+'rtsCuratedObjects', function (error, response) {
				//console.log(response.body);
				var rtsCuratedObjects = JSON.parse(response.body);

				
				
				_.forEach(rtsCuratedObjects, function(rtsCuratedObject, key){
							agregateCuratedObjects(rtsCuratedObject);
//console.log(rtsCuratedObject)

							//console.log(rtsCuratedObject.item.url);

				});
				
				rtsCuratedObjects =  _.sortByOrder(agregatedCuratedObjects, 'date',['desc']);

				console.log(rtsCuratedObjects);
});

function agregateCuratedObjects(rtsCuratedObject)
{
	  //agregatedCuratedObjects.push = 
	  var currentMonth = _.findWhere(agregatedCuratedObjects, { 'date': moment(rtsCuratedObject.date).format('YYYY-MM-DD') });

	  if(!currentMonth){
	  	currentMonth = {};
	  	currentMonth.date = moment(rtsCuratedObject.date).format('YYYY-MM-DD');
	  	currentMonth.keywords = [];
	  	agregatedCuratedObjects.push(currentMonth);
	  }

	  var currentKeyword = _.findWhere(currentMonth.keywords, { 'name': rtsCuratedObject.keyword.name });

		if(!currentKeyword){
			var currentKeyword = {};
	 		currentKeyword.name  = rtsCuratedObject.keyword.name;
	 		currentKeyword.trends = [4,355,2,4,12,20,58,1,1,0,1,48,12,7,8,5,6,1,3,48,12,7,8,5,6,1,3];
	  	currentKeyword.category = rtsCuratedObject.keyword.category;
	  	currentKeyword.order = rtsCuratedObject.keyword.order;
	  	currentKeyword.items = [];
	  	currentMonth.keywords.push(currentKeyword);
		}

		var item = rtsCuratedObject.item;

		if(item.detail.body){
			item.body = item.detail.body;
		}


		item.details = item.detail.streams;

		if(item.details){
			item.details.preview_image_url = item.detail.preview_image_url;
		}




		currentKeyword.items.push(item);
}