var app = angular.module('floppernews',[]);

app.controller('maincontroller',['$scope', function($scope){
	$scope.test = "Welcome to Angular JS!";
	$scope.posts=[{title:'Mastering Algorithms', timesVisited:1},
					{title:'Getting and Cleaning data', timesVisited:1},
					{title:'Learn Foreign languages', timesVisited:15},
					{title: 'A Game of thrones',timesVisited:12},
					{title: 'Book store', timesVisited:120}
				];
}]);