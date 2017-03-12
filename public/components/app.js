angular.module('MyApp')

.controller('myController', ['$scope', '$http', function($scope, $http) {

  this.buttonClick = () => {
    var context = this;
    $http.get('/conversations'
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