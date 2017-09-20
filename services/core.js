(function () {
    'use strict'
    angular.module('supdoc').
        factory('core', function ($http) {
            var factory = {}

            factory.getUsers = function () {
                $http({
                    method: 'GET',
                    url: 'http://10.1.7.113:4000/api/users/',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response);
                });
            }
            return factory;
            factory.postUsers = function (User) {
                $http({
                    method: 'POST',
                    url: 'http://10.1.7.113:4000/api/users/',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data:User

                }).then(function (response) {
                    console.log(response);
                });
            }
            return factory;
        });
})();