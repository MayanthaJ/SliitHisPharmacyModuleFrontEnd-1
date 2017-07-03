app.controller('DrugCatCtrl',function(alert,$scope, $http, $location, $routeParams){
	$scope.addCategory = function(){	

		var cat = {
			"name": $scope.name
		
		}
	
		$http({
          method  : 'POST',
          url     : 'http://localhost:8888/categories/',
          data    :  cat, 
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){
 			
    		alert('success', 'Success! ',res.data.msg);


    	},function(err){
    		alert('danger', 'Error! ',res.data.msg);
    	});


	};
});