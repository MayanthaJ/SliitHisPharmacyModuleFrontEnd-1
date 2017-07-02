app.controller('AddDrugCtrl',function(alert,$scope, $http, $location, $routeParams){

  $scope.fetchCat = function(){
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
  function clearAll(){

    $scope.dname="";
    $scope.dtype="";
    $scope.image ="";
   
  }

  $scope.addDrug = function(){	


    var drug = {
      "dname": $scope.dname,
      "type":$scope.dtype,
      "image": $scope.image
    
    }
  
    $http({
          method  : 'POST',
          url     : 'http://localhost:8888/drugs/',
          data    :  drug, 
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){
        clearAll()
        alert('success', 'Success! ',res.data.msg);

      },function(err){
        alert('danger', 'Error! ',err);
      });


	};

  $scope.editing = function(){
      $scope.showthis = true;
  };
  $scope.fillTextBox = function(val){
    $scope.type = val.name;
    $scope.dtype = val;
    $scope.showthis = false;
  };
 

});