app.controller('DrugCatListCtrl',function(alert, $scope, $http, $location, $routeParams){
 	console.log('fark')
	$scope.fetchCatList = function(){

		$http.get('http://localhost:8888/categories/').then(function(res){
			 if(res.status == 200){
					if(res.data.success == true){
						console.log(res.data)
						$scope.catList = res.data.drugCategoriesList;
                         
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