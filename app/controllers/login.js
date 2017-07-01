app.controller('loginController',  function(auth,$scope, $http,authentication, $location,alert, $routeParams){

	$scope.checkLoggedIn = function(){
		if (auth.isAuthenticated()) {
		    $location.path('/dashboard');
        }
    };

	$scope.submit= function(){
		
		authentication.login($scope.username, $scope.password).then(function(res){

			alert('success', 'Welcome! Thanks for coming back ','Login Success');
			
		},function(res){
			alert('danger', 'Oops! ',res.data.msg);
		});
	
	}	
});