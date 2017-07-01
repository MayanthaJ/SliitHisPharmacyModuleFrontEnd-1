app.controller('LogoutCtrl', function (auth, $location) {
    auth.removeToken();
    console.log('logout')
   $location.path( "/" );
  });
