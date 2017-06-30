app.service('authentication', function ($location,$http,auth) {
   
	this.login = function(username,password){
		return $http.post('http://localhost:8888/users/authenticate', {
			username: username,
			password : password
		}).then(authSuccessful);
	};

	this.register = function(username, password){
		return $http.post('http://localhost:8888/users/',{
			username: username,
			password : password
		}).then(authSuccessful);
	};

	function authSuccessful(res){
		
		auth.setToken(res.data.token);
		auth.setID(res.data.user.id);
	    auth.setUsername(res.data.user.username);
		auth.setEmail(res.data.user.email);
		$location.path( "/dashboard" );
	}
  });
