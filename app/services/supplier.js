var app = angular.module('phPlus');
app.factory('supplierService', ['$http', function($http){
    return {
        get : () => $http.get('http://localhost:8888/suppliers').then(response => response.data),
        add : (supplier) => $http.post('http://localhost:8888/suppliers', supplier).then(response => response.data),
        remove : (email) => $http.delete('http://localhost:8888/suppliers/' + email).then(response => response.data),
        update : (email, supplier) => $http.update('http://localhost:8888/suppliers/' + email, supplier).then(response => response.data),
        getByEmail: (email)=>$http.get('http://localhost:8888/suppliers/'+email).then(response => response.data),
        getQuotationsOfASupplier:(id)=>$http.get('http://localhost:8888/suppliers/'+id+'/quotations').then(
            response=>response.data
        ),
        getQuotationById:(email, quotationId)=>$http.get('http://localhost:8888/suppliers/'+email+'/quotations/'+quotationId).then(
            response=>response.data
        ),
        addAQuotation:(email)=>$http.post('http://localhost:8888/suppliers/'+email+'/quotations').then(
            response=>response.data
        ),
        updateQuotation:(email, quotationId)=>$http.put('http://localhost:8888/suppliers/'+email+'/quotations/'+quotationId).then(
        response=>response.data
        ),
        deleteQuotation:(email, quotationId)=>$http.delete('http://localhost:8888/suppliers/'+email+'/quotations/'+quotationId).then(
            response=>response.data
        )
    };
}]);
