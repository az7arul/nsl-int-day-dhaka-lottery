var _ = require('lodash');
var request = require('request');
var j = request.jar()

var options = {
	url: 'https://api.github.com/repos/nodeschool/international-day/issues/70/comments',
	method: 'GET', 
	jar: j,
	json: true,
	headers: {
	    'User-Agent': 'NodeSchool Dhaka lottery'
	  }
};

request(options, function (err, res, data) {
	if (err) { return console.log(err); }
	var winners = _.chain(data).map(function (user) { return user.user.login; }).sample(process.argv[2] | 3).value();
	console.log(winners);
})


