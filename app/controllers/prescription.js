app.controller('prescriptionController', function(alert, $scope, $http, $location, $routeParams){
	$scope.fetchPrescriptions = function(){
 
			$http.get('http://localhost:8888/prescriptions/').then(function(response){
				
				if(response.status == 200){
					if(response.data.success == true){

						$scope.prescriptionsList = response.data.prescriptionsList;

					}else if(response.data.success == false){
						alert('warning', 'Oops! ',res.data.msg);
					}
				}else if(response.status == -1){
					alert('danger','Oops! ', 'Connection Lost');
				}else{
					
					alert('warning', 'Oops! ',res.data.msg);
				}
			},function(err){
				alert('danger', 'Oops! ', err);
			});

		};

	$scope.addPrescription = function(){
		$location.path('/myprescriptions/prescription');
	}
	
});