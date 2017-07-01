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