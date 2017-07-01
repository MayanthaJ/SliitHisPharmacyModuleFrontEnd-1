app.controller('HeaderCtrl', function ($scope, auth,$location, alert) {
    $scope.isAuthenticated = auth.isAuthenticated;
    console.log(auth.isAuthenticated());



  });
