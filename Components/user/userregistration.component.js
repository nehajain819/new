angular.
  module('supdoc').
  component('useregistration', {
    templateUrl: './Components/user/user.component.html',
    controller: function userController($scope) {
      $scope.username = '';
      $scope.Email_Id = '';
      $scope.Password = '';
      $scope.CPassword = '';
    },
  });