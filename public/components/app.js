angular.module('MyApp')

.controller('myController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  this.text = 'Time to break some ice!';

  this.category = 'social';

  this.navClick = () => {
    console.log($routeParams);

  }

  this.buttonClick = () => {

    var context = this;
    $http.get(`/${this.category}`
    ).then(function (response) {
      console.log('Success!', response)
      context.text = response.data;
      // Need to render response
    }, function (response) {
      console.error('Error', response)
    });
  };

}])

.directive('oneline', function() {
  return {
    scope: {},
    controller: 'myController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../templates/line.html'
  };
})