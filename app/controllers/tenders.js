/**
 * Created by mayac on 7/1/2017.
 */

app.controller('tenderController', function($scope, $http){

    //get all tenders
    $scope.fetchTernders = function(){



        $http({
            method : "GET",
            url : "http://localhost:8888/users/tender/list"
        }).then(function mySuccess(response) {
            $scope.tenderList = response.data.tender;
            $scope.quantity = 4;
        }, function myError(response) {
            $scope.tenderList = response.statusText;
        });

        $http({
            method : "GET",
            url : "http://localhost:8888/drugs/"
        }).then(function mySuccess(response) {
            $scope.drugsList = response.data.drugList;
            $scope.quantity = 4;
        }, function myError(response) {
            $scope.drugsList = response.statusText;
        });

    };

    //Create new tender
    $scope.editperson = function(tender){
        $scope.tenderModal = tender;
        $scope.quantity = 4;
        console.log($scope.tenderModal);
    };

    $scope.addTender = function(){
            var drgid = $scope.drug.id;
            var drgtype = $scope.drug.type;
            var drgName = $scope.drug.dname;


        var tend = {

            "drug_id": drgid,
            "drug_name": drgName,
            "drug_categ": drgtype ,
            "quantity": $scope.quantity,
            "description": $scope.description,
            "status": "1",
            "t_ex_date": $scope.t_ex_date,
            "placedby":"3dsa"

        }

        console.log(tend);

        $http({
            method  : 'POST',
            data : tend,
            url     : 'http://localhost:8888/users/tender/',
        }).then(function(res){
            $('#newTender').modal('toggle'); //or  $('#IDModal').modal('hide');
            alert('success', 'Success! ',res.data.msg);
            location.reload();

        },function(err){
            alert('danger', 'Error! ',err.data.msg);
        });


    };

    //update tender
    $scope.updateTender = function(){

        var tenderid = $scope.tenderModal.tenderid;


        var tend = {
            "drug_id":$scope.tenderModal.drug_id,
            "drug_name": $scope.tenderModal.drug_name,
            "drug_categ": $scope.tenderModal.drug_categ ,
            "quantity":$scope.tenderModal.quantity,
            "description": $scope.tenderModal.description,
            "status":1,
            "t_ex_date":$scope.tenderModal.t_ex_date,
            "placedby":"8"


        }


        console.log(tend);

        $http({
            method  : 'PUT',
            data : tend,
            url     : 'http://localhost:8888/users/tender/'+tenderid,
        }).then(function(res){
            $('#updateTen').modal('toggle'); //or  $('#IDModal').modal('hide');
            alert('Tender Updated', 'Success! ',res.data.msg);
            location.reload();

        },function(err){
            alert('danger', 'Error! ',res.data.msg);
        });


    };



    //Tender Delete
    $scope.delTender = function(tender){
        $scope.tenderModal = tender;
        $scope.quantity = 4;
        console.log($scope.tenderModal);
    };

    $scope.deleteTender = function(){
        var tenderid = $scope.tenderModal.tenderid;
        console.log(tenderid);
        $http({
            method  : 'DELETE',
            url     : 'http://localhost:8888/users/tender/'+tenderid,

        }).then(function(res){
            $('#tenderDelete').modal('toggle'); //or  $('#IDModal').modal('hide');
            alert('Tender Deleted', 'Success! ',res.data.msg);
            location.reload();

        },function(err){
            alert('danger', 'Error! ',err.data.msg);
        });
    };
});