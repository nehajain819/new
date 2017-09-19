var supdoc = angular.module('supdoc', ['ngRoute']);
 

    // configure our routes
    supdoc.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/supdoc', {
                templateUrl : './Components/supdoc/supdoc.component.html',
                controller  : 'supdocController'
            })

            // route for the about page
            .when('/user', {
                templateUrl : './Components/user/user.component.html',
                controller  : 'userController'
            })

            // route for the contact page
            .when('/project', {
                templateUrl : './Components/project/project.component.html',
                controller  : ' projectController'
            });
    });
    supdoc.controller('supdocController', function($scope) {
        // create a message to display in our view
        $scope.project ='fdsg';
      $scope.user='gsf';
      $scope.historytextarea='dsfg';
      $scope.currenttextarea='df';
    });

    supdoc.controller('userController', function($scope) {
        $scope.username = 'dsaf';
      $scope.Email_Id = 'dsaf';
      $scope.Password = 'fds';
      $scope.CPassword = 'fsd';
    });

    supdoc.controller('projectController', function($scope) {
        $scope.projectname ='';
      $scope.members='';
    });