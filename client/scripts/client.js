var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService){
// inputs for movie name, description, director, length -->
// The controller for the first view should have a button that 'grabs'
// the information off of the form and stores it inside of a factory for the second view.

    $scope.movie = {
      title: '',
      description: '',
      director: '',
      runTime: ''
    };
    $scope.addMovie = MovieService.addMovie;

}]);

myApp.controller('TwoController', ['$scope', 'MovieService', function($scope, MovieService){
// grab movies from factory and make them available to view
  $scope.movies = MovieService.movies;
  $scope.addMovie = MovieService.addMovie;

}]);


myApp.factory('MovieService', [function(){

var movieArray = [];

var movies = {
  movieArray: movieArray
};

function addMovie(newMovie) {
  console.log("logging new movie: ", newMovie);
  movieArray.push(angular.copy(newMovie));

}

//this makes it public
  return {
    addMovie: addMovie,
    movies: movies
  };
}]);//ends factory
