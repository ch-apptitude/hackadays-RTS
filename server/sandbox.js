var request = require('request');


request('http://hackdays.ngrok.com/api/trends', function (error, response) {
  console.log('trends', response.body);
});