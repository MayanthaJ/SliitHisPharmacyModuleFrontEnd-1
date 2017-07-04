var app = angular.module('phPlus');
app.controller('supplierController', function ($scope, supplierService, $location, $routeParams, $window) {

//    var storage=$window.localStorage;

    function getSuppliers() {
        supplierService.get().then(suppliers=>{
            $scope.suppliers=suppliers;
        });
    }

    getSuppliers();

    $scope.addSupplier=(supplier)=>{
        supplierService.add(supplier).then((supplier)=>{
       //     storage.email=supplier.email;
       //     storage.supplierId=supplier._id;
            getSuppliers();
            console.log(supplier);
            if(supplier=="OK")
            {
                alert("Supplier has been successfully registered.");
            }
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

    const email="d@g.bom";
    function getASupplier(email){
        //const email=supplier.email;
        supplierService.getByEmail(email).then((supplier)=>{
            $scope.currentSuppliers=supplier;
        });
    };

    getASupplier(email);

    $scope.getSelectedRow=(quotation)=>{
        $scope.selectedQuotation=quotation;
    };

    const id="595940fc7dcbc2430cde7d1e";
    function getSupplierQuotations(id){
        supplierService.getQuotationsOfASupplier(id).then(quotations=>{
                $scope.quotations=quotations;
                $scope.quotationId=quotations._id;
        });
    };

    getSupplierQuotations(id);

    $scope.updateAQuotation=(quotation)=>{
        const qid=quotation._id;
        //console.log(qid);

        //const desc=quotation.description;
        //console.log(desc);

        console.log(quotation);

        supplierService.updateQuotation(id, qid, quotation).then(()=>{

            getSupplierQuotations(id);
        });
    };

    $scope.generateQuotation=(quotation)=>{
        quotation.quotation_placed_date=Date.now();
        supplierService.addAQuotation(id, quotation).then(()=>{
            getSupplierQuotations(id);
        });
    };

    $scope.deleteQuotation=()=>{
        supplierService.deleteQuotation($scope.quotationId).then((res)=>{
            if(res=="OK"){
                alert("Record Successfully Deleted");
            }
        });
    };

});
