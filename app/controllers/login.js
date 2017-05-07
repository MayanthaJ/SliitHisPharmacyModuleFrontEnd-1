var app = angular.module('phPlus');
app.controller('loginController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	console.log("login controller loaded");

	$scope.authenticate = function(){
			if($scope.showLogin){
			$http.post('http://localhost:8888/users/authenticate',$scope.user).then(function(response){
				if(response.status == 200){
					if(response.data.success == true){
						$scope.token = response.data.token;
						$scope.msg = response.data.msg;
						$scope.loggedUser = response.data.user;
						
						console.log($scope.loggedUser);
						console.log($scope.token);
						 $location.path('/dashboard');
					}else if(response.data.success == false){
						$scope.msg = response.data.msg;
						console.log($scope.msg);
					}
				}else if(response.status == -1){
					$scope.msg = "Connection Lost";
					console.log($scope.msg);
				}else{
					$scope.msg = response.data.msg;
					console.log($scope.msg);
				}
			},function(err){
				console.log(err);
			});
		}else{
			$location.path('/dashboard');
		}
	}
	
}]);