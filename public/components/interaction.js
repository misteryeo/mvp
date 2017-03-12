angular.module('MyApp')

.controller('interactionController', function() {
})

.directive('interaction', function() {
  return {
    scope: {
      click: '<'
    },
    controller: 'interactionController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'templates/interaction.html'
  };
});


