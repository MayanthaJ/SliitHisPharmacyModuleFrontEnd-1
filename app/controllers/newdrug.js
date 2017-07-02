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

  $scope.addDrug = function(){	


	};


  

  $scope.getCat = function(query){
      console.log('fuckkkkkk')
     $scope.filterCategory = [];

    angular.forEach( $scope.catList ,function(category) {
      console.log($scope.filterCategory);
        if(category[query.toLowerCase().indexOf()] >= 0){
          $scope.filterCategory.push(category);
          console.log($scope.filterCategory);
        }
      
      });      
  };
  
  $scope.fillTextBox = function(val){
    $scope.type = val;
    $scope.hidethis = true;
  };
 

});