var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService) {

	$scope.postData = function() {
		parseService.postData($scope.question).success(function() {
			$scope.question = '';
		})
	}

    $scope.getParseData = function() {
    	parseService.getData().then(function(res) {
    		console.log(res);
    		$scope.questions = res.data.data;
    		console.log($scope.questions);
    	})
    }

    $scope.getParseData();

});