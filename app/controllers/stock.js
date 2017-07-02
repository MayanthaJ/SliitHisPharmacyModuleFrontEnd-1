app.controller('StockCtrl',function(auth,alert,$scope, $http, $location, $routeParams){



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

    $scope.batch = null;
    $scope.alertlevel = 0;

  }

  $scope.addStock = function(){ 

    var stock = {

      "DrugID": $scope.batch._id,
      "TotalQuantity": $scope.TotalQuantity,
      "batchID":$scope.batchID,
      "exp":$scope.exp

    }

   
    $http({
      method  : 'POST',
      url     : 'http://localhost:8888/stocks/',
      data    :  stock, 
      headers : {'Content-Type': 'application/json'} 

    }).then(function(res){

      alert('success', 'Success! ',res.data.msg);
//stock
             var stockId = res.data.stock._id;
             var batch = {
                  "quantity": $scope.TotalQuantity,
                  "alertlevel": $scope.alertlevel,
                  "stockId":stockId,
                };

            $http({
                  method  : 'PUT',
                  url     : 'http://localhost:8888/batches/'+$scope.batchID,
                  data    :  batch, 
                  headers : {'Content-Type': 'application/json'} 
                 }).then(function(res){
                clearAll()
                alert('success', 'Success! ',res.data.msg);

              },function(err){
                alert('danger', 'Error! ',err);
              });


    },function(err){
      alert('danger', 'Error! ',err);
    });


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