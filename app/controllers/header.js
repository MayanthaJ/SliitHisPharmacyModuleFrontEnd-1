app.controller('HeaderCtrl', function ($scope, auth) {
	console.log( auth.isAuthenticated);
    $scope.isAuthenticated = auth.isAuthenticated;
  });
