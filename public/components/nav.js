angular.module('MyApp')

.controller('navController', function() {
  this.dropdown = 'Hello';
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