$http({
          method  : 'POST',
          url     : 'http://localhost:3001/transaction',
          data    : {"ccno" : $scope.formdata.ccno,"cvv":$scope.formdata.cvv,"amt":$scope.formdata.grandtotal,"email":$scope.formdata.email}, //forms user object
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){

    		alert('success', 'Email! ',res.data.msg);

    	},function(err){
    		
    	});