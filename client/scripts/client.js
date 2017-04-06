var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService){
// inputs for movie name, description, director, length -->

// The controller for the first view should have a button that 'grabs'
// the information off of the form and stores it inside of a factory for the second view.



}]);


myApp.controller('TwoController', ['$scope', 'MovieService', function($scope, MovieService){
// grab movies from factory and make them available to view


}]);


myApp.factory('MovieService', [function(){



//this makes it public
  return {

  };
}]);//ends factory
