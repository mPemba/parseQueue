var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function() {
	return {
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'o1w5qwG8GHILgZNNufRuAOSUIoU2D8e02GpVfMhx', 'X-Parse-REST-API-Key': 'ukyWHpDOJ0Hk6PZTfy437iHscTqY1bQq0VyAjAes'};
			return config;
		}
	};
});