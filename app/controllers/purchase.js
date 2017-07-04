/**
 * Created by mayac on 7/1/2017.
 */
app.controller('purchaseOrdersController', function($scope, $http){

    //get all tenders
    $scope.fetchOrders = function(){
        $http({
            method : "GET",
            url : "http://localhost:8888/users/purchaseorder/list"
        }).then(function mySuccess(response) {
            $scope.orderList = response.data.tender;
            $scope.quantity = 4;
        }, function myError(response) {
            $scope.orderList = response.statusText;
        });
    };


    //Create new order
    $scope.viewOrd = function(tender){
        $scope.orderModal = tender;
        $scope.quantity = 4;
        console.log($scope.orderModal);
    };

    $scope.addOrder = function(){




        var ord = {

            "tenderid": $scope.tenderid,
            "quotationid": $scope.quotationid,
            "supplierid": $scope.supplierid ,
            "placedby":'1',
            "status": $scope.status,
            "order_dispatched_date": $scope.d1,
            "order_completed_date": $scope.d2,


        }

        console.log(ord);

        $http({
            method  : 'POST',
            data : ord,
            url     : 'http://localhost:8888/users/purchaseorder/',
        }).then(function(res){
            $('#newOrder').modal('toggle'); //or  $('#IDModal').modal('hide');
            alert('success', 'Success! ',res.data.msg);

            location.reload();
        },function(err){
            alert('danger', 'Error! ',res.data.msg);
        });


    };

    //update order
    $scope.updateOrder = function(){
        var drgid = $scope.orderModal.drugId;
        var drgtype = $scope.orderModal.type;
        var drgName = $scope.orderModal.name;
        var tenderid = $scope.orderModal.tenderid;


        var tend = {

            "drug_id":"1",
            "drug_name":"12",
            "drug_categ":"123123",
            "quantity":"123",
            "description":"123",
            "status":"123",
            "t_ex_date":"123",
            "placedby":"123"


        }

        console.log(tend);

        $http({
            method  : 'PUT',
            data : tend,
            url     : 'http://localhost:8888/users/purchaseorder'+tenderid,
        }).then(function(res){
            $('#updateOrd').modal('toggle'); //or  $('#IDModal').modal('hide');
            alert('Tender Updated', 'Success! ',res.data.msg);

            location.reload();
        },function(err){
            alert('danger', 'Error! ',res.data.msg);
        });


    };



    //Tender order
    $scope.delOrd = function(order){
        $scope.orderModal = order;
        $scope.quantity = 4;
        console.log($scope.orderModal);
    };

    $scope.delOrder = function(){
        var orderid = $scope.orderModal.orderid;
        console.log(orderid);
        $http({
            method  : 'DELETE',
            url     : 'http://localhost:8888/users/purchaseorder/'+orderid,

        }).then(function(res){
            $('#orderDelete').modal('toggle'); //or  $('#IDModal').modal('hide');
            alert('Purchase Order Deleted', 'Success! ',res.data.msg);
            location.reload();


        },function(err){
            alert('danger', 'Error! ',res.data.msg);
        });
    };
});