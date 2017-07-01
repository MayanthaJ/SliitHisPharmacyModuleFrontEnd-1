app.controller('prescriptionController', function($scope, $http, $location, $routeParams){

	$scope.fetchPrescriptions = function(){
 
	 
			$http.get('http://localhost:8888/prescriptions/',$scope.user).then(function(response){
				
				if(response.status == 200){
					if(response.data.success == true){
						console.log(response.data);
						$scope.prescriptionsList = response.data.prescriptionsList;

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