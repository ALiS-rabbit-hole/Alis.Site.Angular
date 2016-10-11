angular.module('accountServices', [])
    .factory('$accountServices', function ($http, $cookies) {
        var serviceRoot = config.serviceRoot + "/Account/";
        var authedUser = {};
    return {
        resendPassword: function (email) {
            return $http.post(serviceRoot + "ResendPassword", { Email: email }).then(function (result) {
                return result.data;
            });
        },
        tokenIsValid: function(token) {
            return $http.post(serviceRoot + "ChangePassword/Token", { Token: token }).then(function (result) {
                return result.data;
            });
        },
        changePassword: function (changePassword) {
            return $http.post(serviceRoot + "ChangePassword", changePassword).then(function (result) {
                return result.data;
            });
        },
        getAuthenticatedUser: function () {

         //   if (authedUser != null)
          //      return authedUser;

            return $http.post(config.serviceRoot + "/Users/Get/Authenticated").then(function(result) {
                
              //  if (result.success) {
              //      authedUser = result.data;
              //  }
                return result.data; // authedUser;
            });
        },

        authenticate: function(credentials) {
            return $http.post(config.serviceRoot + "/authenticate", credentials).then(function (result) {
                console.log(result);
            //    if (result.status == 200) {
                   // $cookies.put("user","test");
               // }

                return result.data;
            });
        }
    };
});
