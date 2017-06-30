app.factory('auth', function ($window) {
    // Service logic
    var storage = $window.localStorage;
    var cacheToken;
    var userToken = 'userToken';

    var cacheID;
    var userID = 'userID';

    var cacheName;
    var userName = 'userName';

    var cacheEmail;
    var userEmail = 'userEmail';

    // Public API here
    var auth =  {
      setID: function(id){
        cacheID = id;
        storage.setItem(userID, id);
      },
      setUsername:function(username){
      	cacheName = username;
        storage.setItem(userName, username);
      },
      setEmail: function(email){
        cacheEmail = email;
        storage.setItem(userEmail, email);
      },
      setToken: function(token){
        cacheToken = token;
        storage.setItem(userToken, token);
      },
      getUsername:function(){
 		 if(!cacheName){
          cacheName = storage.getItem(userName);
        }
        return cacheName;
      },
      getToken: function(){
         if(!cacheToken){
          cacheToken = storage.getItem(userToken);
        }
        return cacheToken;
      },
      getEmail: function(){
         if(!cacheEmail){
          cacheEmail = storage.getItem(userEmail);
        }
        return cacheEmail;
      },
      getID : function(){
         if(!cacheID){
          cacheID = storage.getItem(userID);
        }
        return cacheID;
      },
      isAuthenticated: function(){
      	console.log(!!auth.getToken())
      	console.log(auth.getToken())
        return !!auth.getToken();
      },
      removeToken: function(){
        cacheToken = null;
        cacheEmail = null;
        cacheName  = null;
        cacheID = null;
        storage.removeItem(cacheName);
        storage.removeItem(userToken);
        storage.removeItem(userEmail);
        storage.removeItem(userID);
        storage.clear();
      }
    }

    return auth;
});
