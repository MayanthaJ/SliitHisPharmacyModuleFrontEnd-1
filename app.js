var app = angular.module('phPlus',['ngRoute','ngAnimate']);

app.config(($routeProvider)=>{

	$routeProvider.when('/',{

		controller :'loginController',
		templateUrl : 'app/views/login.html' 
	})
	.when('/dashboard',{

		controller :'dashboardController',
		templateUrl : 'app/views/dashboard.html'
	})
	.when('/prescriptions',{

		controller :'prescriptionController',
		templateUrl : 'app/views/prescription.html'
	})
	.when('/myprescriptions',{

		controller :'MyPrescriptionCtrl',
		templateUrl : 'app/views/myprescription.html'
	})
	.when('/myprescriptions/prescription',{

		controller :'NewPrescriptionCtrl',
		templateUrl : 'app/views/newprescription.html'
	})
	.when('/drugmanager/drugcat',{

		controller :'DrugCatCtrl',
		templateUrl : 'app/views/drugcat.html'
	})
	.when('/drugmanager/newdrug',{

		controller :'AddDrugCtrl',
		templateUrl : 'app/views/newdrug.html'
	})
	.when('/drugmanager/catlist',{

		controller :'DrugCatListCtrl',
		templateUrl : 'app/views/catlist.html'
	})
	.when('/drugmanager',{

		controller :'DrugPlusCtrl',
		templateUrl : 'app/views/drugplus.html'
	})
	.when('/drugmanager/batches',{

		controller :'BatchCtrl',
		templateUrl : 'app/views/batch.html'
	})
	.when('/drugmanager/newbatch',{

		controller :'AddBatchCtrl',
		templateUrl : 'app/views/newbatch.html'
	})
	.when('/drugs',{

		controller :'drugsController',
		templateUrl : 'app/views/drugs.html'
	})
	.when('/doctors',{

		controller :'DoctorCtrl',
		templateUrl : 'app/views/doctor.html'
	})
	.when('/logout',{
		template: '',
		controller :'LogoutCtrl'
	})

	.otherwise({

		redirectTo: '/'
	});

});



app.run(function ($rootScope, $location, auth) {
    $rootScope.$on('$routeChangeStart', function (event) {

        if (!auth.isAuthenticated()) {
            $location.path('/');
        }
       
    });
});