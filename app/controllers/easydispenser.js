app.controller('EasyDispenseCtrl', function (alert,auth, $location, $scope, $http) {


	$scope.customDrugList = [];
	var batchObj = [];
	$scope.fetchPrescriptions = function(){

		$http.get('http://localhost:8888/prescriptions').then(function(res){

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

	$scope.fetchDrugs = function(){

		$http.get('http://localhost:8888/drugs/').then(function(res){
			if(res.status == 200){
				if(res.data.success == true){

					$scope.drugList = res.data.drugList;

				}else if(res.data.success == false){
					alert('warning', 'Oops! ',res.data.msg);
				}
			}else if(res.status == -1){
				alert('danger','Oops! ', 'Connection Lost');
			}else{
				alert('warning', 'Oops! ',res.data.msg);
			}

		},function(err){
			console.log('err')
			console.log(err)
			alert('danger', 'Oops! ','Err' );
		});
	}
	$scope.fillModel = function(prescription){
		clearAll();
		$scope.dp = prescription.prescribed_drugs;
		$scope.prescriptionID = prescription._id;
	}


	function clearAll(){

		$scope.qty = 0;
		$scope.cdrug = null;
		$scope.customDrugList = [];
		$scope.drugId="";
		batchObj = [];
		$scope.qih = 0;

	}

	$scope.editing = function(){

		$scope.showthis = true;
	};

	$scope.addRow = function(){		

     // 

     console.log($scope.drugId)
     	$http.get('http://localhost:8888/batches/quantity/'+$scope.drugId).then(function(res){
     		console.log(res.data)
			 if(res.status == 200){
					if(res.data.success == true){
						
						var dbQty = res.data.qty;
							console.log(dbQty)
						if(dbQty >= $scope.qty ){
							$scope.customDrugList.unshift({ '_id': $scope.drugId, 'dname': $scope.cdrug.dname, 'qty':$scope.qty,'date':new Date().toISOString() });
							batchObj.unshift({ '_id': $scope.drugId,"qty":$scope.qty});
							$scope.qty = 0;
							$scope.cdrug = null;

						}else{
							console.log('1')
								alert('warning', 'Oops! ','Not Enough Stock');
						}
                         
					}else if(res.data.success == false){
						console.log(res.data.msg)
						alert('warning', 'Oops! ',res.data.msg);
					}
				}else if(res.status == -1){
					console.log('3')
					alert('danger','Oops! ', 'Connection Lost');
				}else{
					console.log(res.data.msg)
					alert('warning', 'Oops! ',res.data.msg);
				}

		},function(err){
			console.log(err)
			alert('danger', 'Oops! ', err);
		});

	};

	$scope.removeSelected = function(index){
		$scope.customDrugList.splice(index,1);
	};

	$scope.fillTextBox = function(drug){
		console.log(drug);
		$scope.drugId = drug._id;
		console.log($scope.drugId)
		$scope.cdrug = drug;
		$scope.showthis = false;
		$scope.image = drug.image;
		getQIH();


	};

	function getQIH(){
     	$http.get('http://localhost:8888/batches/quantity/'+$scope.drugId).then(function(res){
     		console.log(res.data)
			 if(res.status == 200){
					if(res.data.success == true){
						
						var dbQty = res.data.qty;
						$scope.qih = dbQty;
					
                         
					}else if(res.data.success == false){
						console.log(res.data.msg)
						alert('warning', 'Oops! ',res.data.msg);
					}
				}else if(res.status == -1){
					console.log('3')
					alert('danger','Oops! ', 'Connection Lost');
				}else{
					console.log(res.data.msg)
					alert('warning', 'Oops! ',res.data.msg);
				}

		},function(err){
			console.log(err)
			alert('danger', 'Oops! ', err);
		});
	}

	$scope.processData = function(){
		
		console.log(batchObj);

		  $http({
          method  : 'PUT',
          url     : 'http://localhost:8888/batchservice/',
          data    :  batchObj, 
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){
         	console.log('================')
 			console.log(res.data.msg)

    		alert('success', 'Success! ',res.data.msg);

    	},function(err){
    		console.log('---------------')
    		console.log(err.data.msg)
    		alert('danger', 'Error! ',err.data.msg);
    	});


		console.log($scope.customDrugList);
		console.log($scope.prescriptionID)
         $http({
          method  : 'PUT',
          url     : 'http://localhost:8888/prescriptions/history/'+$scope.prescriptionID,
          data    :  $scope.customDrugList, 
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){
         	console.log('qqqqqqq')
 			console.log(res.data.msg)
    		alert('success', 'Success! ',res.data.msg);


    	},function(err){
    		console.log('............')
    		console.log(err.data.msg)
    		alert('danger', 'Error! ',err.data.msg);
    	});






	};

	$scope.clearData = function(){
		clearAll();
	}
	
});
