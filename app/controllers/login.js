app.controller('loginController',  function($scope, $http,authentication, $location,alert, $routeParams){
	console.log('calleds');

	$scope.submit= function(){
		
		authentication.login($scope.username, $scope.password).then(function(res){
			
			alert('success', 'Welcome! Thanks for coming back ','Login Success');
			
		},function(res){
			alert('danger', 'Oops! ',res.data.msg);
		});
	
	}	
});