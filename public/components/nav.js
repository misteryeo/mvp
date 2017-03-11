angular.module('MyApp')

.controller('navController', function($scope) {

  $scope.greeting = 'Have you ever been stuck wondering how to say something interesting to that new person you just met?';
  
  $scope.firstClick = function() {
    $scope.greeting = 'Do you find yourself always being asked where you\'re from or where you work?';
  };

  $scope.secondClick = function() {
    $scope.greeting = 'Ever wondered how dinner conversations could be more interesting?'
  };

  $scope.CTA = 'Click on the button to try!'

})

.directive('nav', function() {
  return {
    scope: {},
    controller: 'navController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'templates/nav.html'
  };
});