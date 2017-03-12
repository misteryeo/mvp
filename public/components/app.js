angular.module('MyApp')

.controller('myController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  this.text = 'Time to break some ice!';

  this.category = 'social';

  this.navClick = () => {
    if($location.url() === '#social') {
      this.category = 'social';
    } else if ($location.url() === '#professional') {
      this.category = 'professional';
    } else if ($location.url() === '#nsfw') {
      this.category = 'nsfw';
    }
  }

  this.buttonClick = () => {

    var context = this;
    $http.get(`/${this.category}`
    ).then(function (response) {
      console.log('Success!', response)
      context.text = response.data;
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