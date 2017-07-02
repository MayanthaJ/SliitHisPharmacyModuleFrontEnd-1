app.controller('BatchCtrl',function(alert, $scope, $http, $location, $routeParams){
 	 
	$scope.fetchCatList = function(){

		$http.get('http://localhost:8888/batches/').then(function(res){
			 if(res.status == 200){
					if(res.data.success == true){
						
						$scope.batchList = res.data.batchList;
                         
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
	}
});