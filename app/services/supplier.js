var app = angular.module('phPlus');
app.factory('supplierService', function($http){
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
        addAQuotation:(id, quotation)=>$http.post('http://localhost:8888/suppliers/'+id+'/quotations', quotation).then(
            response=>response.data
        ),
        updateQuotation:(id, quotationId, quotation)=>$http.put('http://localhost:8888/suppliers/'+id+'/quotations/'+quotationId, quotation).then(
        response=>response.data
        ),
        deleteQuotation:(id, quotationId)=>$http.delete('http://localhost:8888/suppliers/'+id+'/quotations/'+quotationId).then(
            response=>response.data
        )
    };
});
