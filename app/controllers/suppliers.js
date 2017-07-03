var app = angular.module('phPlus');
app.controller('supplierController', ['$scope', 'supplierService', '$location', '$routeParams', function ($scope, supplierService,
                                                    $location, $routeParams, $window) {

//    var storage=$window.localStorage;

    function getSuppliers() {
        supplierService.get().then(suppliers=>{
            $scope.suppliers=suppliers;
        });
    }

    getSuppliers();

    $scope.addSupplier=(supplier)=>{
        supplierService.add(supplier).then(()=>{
            storage.email=supplier.email;
            storage.supplierId=supplier._id;
            getSuppliers();
        });
    };

    $scope.deleteSupplier=(supplier)=>{
        const email=supplier.email;
        supplierService.remove(email).then(()=>{
            getSuppliers();
        });
    };

    $scope.updateSupplier=(supplier)=>{
        const email=supplier.email;
        supplierService.update(email, supplier).then(()=>{
            getSuppliers();
        });
    };

    $scope.getASupplier=(supplier)=>{
        const email=supplier.email;
        supplierService.getByEmail(email).then(()=>{

        });
    };

    $scope.getSelectedRow=(quotation)=>{
        $scope.selectedQuotation=quotation;
    };

    const mail="595940fc7dcbc2430cde7d1e";
    function getSupplierQuotations(mail){
        supplierService.getQuotationsOfASupplier(mail).then(quotations=>{
                $scope.quotations=quotations;
        });
    };

    getSupplierQuotations(mail);

}]);
