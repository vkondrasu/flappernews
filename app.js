var app = angular.module('floppernews',[]);

app.controller('maincontroller',['$scope', function($scope){
	$scope.test = "Welcome to Angular JS!";
	$scope.posts=['Mastering Algorithms','Getting and Cleaning data','Learn Foreign languages','A Game of thrones','Book store'];
}]);