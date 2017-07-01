app.controller('drugsController',function($scope, $http, $location, $routeParams){
	console.log('Drugs controller loaded');
	
	$scope.fetchDrugs = function(){
		console.log('fired');
		$http.get('http://localhost:8888/drugs/').then(function(response){
			 if(response.status == 200){
					if(response.data.success == true){
						console.log(response.data);
						$scope.drugsList = response.data.drugList;
                         
						$scope.msg = response.data.msg;

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
	}
});