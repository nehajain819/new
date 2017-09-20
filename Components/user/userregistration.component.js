angular.
  module('supdoc').
  component('useregistration', {
    templateUrl: './Components/user/user.component.html',
    controller: function userController($scope, core) {
      $scope.username = '';
      $scope.Email_Id = '';
      $scope.Password = '';
      $scope.CPassword = '';
      var User={
        name: $scope.username,
        email: $scope.Email_Id,
        password: $scope.Password
      }
      core.postUsers(User);
    },
  });