angular.
  module('supdoc').
  component('supdoc', {
     templateUrl:'./Components/supdoc/supdoc.component.html',
        controller: function supdocController($scope) {
      $scope.project ='';
      $scope.user='';
      $scope.historytextarea='';
      $scope.currenttextarea='';
    },
  });