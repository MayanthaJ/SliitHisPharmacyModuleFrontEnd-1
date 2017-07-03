app.controller('MyPrescriptionCtrl', function (alert,auth, $location, $scope, $http) {

	$scope.getPrescriptions = function(){

			$http.get('http://localhost:8888/users/'+auth.getUsername()+'/prescriptions').then(function(res){
				
				if(res.status == 200){
					if(res.data.success == true){
						
						$scope.prescriptionsList = res.data.prescriptionsList;


					}else if(res.data.success == false){
						alert('warning', 'Oops! ',res.data.msg);
					}
				}else if(res.status == -1){
					alert('danger','Oops! ', 'Connection Lost');
				}else{
					alert('warning', 'Oops! ',res.data.msg);
				}
			},function(err){
				alert('danger', 'Oops! ', err);
			});
		 
	};
	
	$scope.createPres = function(){
		$location.path('/myprescriptions/prescription');
	}

  });
