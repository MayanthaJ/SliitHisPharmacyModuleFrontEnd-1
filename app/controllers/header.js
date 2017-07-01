app.controller('HeaderCtrl', function ($scope, auth,$location, alert) {
    $scope.isAuthenticated = auth.isAuthenticated;
  

  });
