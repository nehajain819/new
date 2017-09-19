angular.
  module('supdoc').
  component('projectregistration', {
     templateUrl:'./Components/project/project.component.html',
        controller: function projectController($scope) {
      $scope.projectname ='';
      $scope.members='';

    },
  });