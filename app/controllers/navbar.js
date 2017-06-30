app.controller('navBarController',  function($scope, $http, $location, $routeParams){
	
	$scope.isUserLoggedIn = function(){

		if($scope.token){
			$scope.showLogin= true;
		}else{
			$scope.showLogin= false;
		}
	}
	
});