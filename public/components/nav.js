angular.module('MyApp')

.controller('navController', function() {

  this.greeting = 'Have you ever been stuck wondering how to say something interesting to that new person you just met?';
  
  this.firstClick = function() {
    this.greeting = 'Do you find yourself always being asked where you\'re from or where you work?';
  };

  this.secondClick = function() {
    this.greeting = 'Ever wondered how dinner conversations could be more interesting?'
  };

  this.CTA = 'Click on the button to try!'

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