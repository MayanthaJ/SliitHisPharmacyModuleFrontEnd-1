app.controller('NewPrescriptionCtrl', function(auth,alert, $scope, $http, $location, $routeParams){
	
	$scope.druglist = [

	];

	function clearAll(){
		$scope.dname='';
		$scope.frequency='';
		$scope.period='';
		$scope.druglist = [];
		$scope.fullname = "";
		$scope.age = null;
	}

	$scope.addRow = function(){		
		$scope.druglist.unshift({ 'dname':$scope.dname, 'frequency': $scope.frequency, 'period':$scope.period });
		$scope.dname='';
		$scope.frequency='';
		$scope.period='';
	};

	$scope.setSelected = function(index){

		$scope.selected = $scope.druglist[index];
		$scope.dname=$scope.selected.dname;
		$scope.frequency=$scope.selected.frequency;
		$scope.period=$scope.selected.period;
		 $scope.druglist.splice(index,1);
    		
	};

	$scope.removeSelected = function(index){
		 $scope.druglist.splice(index,1);
	};

	$scope.isEmpty = function(){
		if($scope.druglist.length > 0){
			return true;
		}else{
			return false;
		}
	};

	$scope.addPrescription = function(){	

		var prescript = {
			"fullname": $scope.fullname,
			"age":$scope.age,
			"prescribed_drugs":$scope.druglist
		}
	
		$http({
          method  : 'POST',
          url     : 'http://localhost:8888/users/'+auth.getUsername()+'/prescriptions',
          data    :  prescript, 
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){
         	clearAll();
    		alert('success', 'Success! ',res.data.msg);


    	},function(err){
    		alert('danger', 'Error! ',res.data.msg);
    	});


	};

});