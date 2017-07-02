app.controller('MyPrescriptionCtrl', function (alert,auth, $location, $scope, $http) {

	$scope.getPrescriptions = function(){

			$http.get('http://localhost:8888/users/'+auth.getUsername()+'/prescriptions').then(function(response){
				
				if(response.status == 200){
					if(response.data.success == true){
						
						$scope.prescriptionsList = response.data.prescriptionsList;

						alert('Succes', 'OK! ',res.data.msg);

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
		 
	}
	

  });
