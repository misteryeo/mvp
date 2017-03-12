angular.module('MyApp')

.controller('navController', function() {
  // Include dropdown menu for categories
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