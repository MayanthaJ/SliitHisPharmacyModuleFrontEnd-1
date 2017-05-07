var app = angular.module('phPlus');
app.controller('navBarController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	$scope.isUserLoggedIn = function(){

		if($scope.token){
			$scope.showLogin= true;
		}else{
			$scope.showLogin= false;
		}
	}
	
}]);