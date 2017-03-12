angular.module('MyApp')

.controller('interactionController', function() {
  this.visible = 'Hello'

  this.toggle = function() {
    this.visible = !this.visible;
  }
})

.directive('interaction', function() {
  return {
    scope: {},
    controller: 'interactionController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'templates/interaction.html'
  };
});