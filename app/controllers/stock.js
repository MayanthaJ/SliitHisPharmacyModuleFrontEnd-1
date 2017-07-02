app.controller('StockCtrl',function(alert,$scope, $http, $location, $routeParams){

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
    alert('danger', 'Oops! ', err);
  });
  }

  $scope.fetchBatchList = function(){

    $http.get('http://localhost:8888/batches/').then(function(res){
       if(res.status == 200){
          if(res.data.success == true){
            
            $scope.batchList = res.data.batchList;
                         console.log($scope.batchList)
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

    $scope.drugId="";
    $scope.name="";

  }

  $scope.addStock = function(){ 


    var stock = {
      "name": $scope.name,
      "drugId": $scope.drugId

    }

    var batchQty = {
      "name": $scope.name,
      "drugId": $scope.drugId

    }

    $http({
      method  : 'POST',
      url     : 'http://localhost:8888/batches/',
      data    :  batch, 
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

    $scope.drugId = val._id;
    $scope.drug = val;
    $scope.showthis = false;
  };


  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 

  today = yyyy+'-'+mm+'-'+dd;

  $scope.mindate = today;


  $scope.editingBatch = function(){

    $scope.showthisb = true;
  };
  $scope.fillTextBoxBatch = function(val){

    $scope.batchID = val._id;
    $scope.batch = val;
    $scope.showthisb = false;
  };


});