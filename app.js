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
	.when('/drugs',{

		controller :'drugsController',
		templateUrl : 'app/views/drugs.html'
	})
	.when('/logout',{
		template: '',
		controller :'LogoutCtrl'
	})
	.otherwise({

		redirectTo: '/'
	});

});