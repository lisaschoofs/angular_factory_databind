var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService){
// inputs for movie name, description, director, length -->

// The controller for the first view should have a button that 'grabs'
// the information off of the form and stores it inside of a factory for the second view.
// console.log(MovieService.movies);
// console.log(MovieService.movie);
    $scope.movie = {
      title: '',
      description: '',
      director: '',
      runTime: ''
    };
    //$scope.movies = MovieService.movies;
    $scope.addMovie = MovieService.addMovie;


    // $scope.addMovie = function() {
    //   console.log(movie);
    // };

}]);


myApp.controller('TwoController', ['$scope', 'MovieService', function($scope, MovieService){
// grab movies from factory and make them available to view
// console.log(MovieService.movies);
// console.log(MovieService.movie);

  // $scope.movie = MovieService.movie;
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
  movieArray.push(newMovie);
  console.log(movieArray);
  console.log(movies);
}

//this makes it public
  return {
    addMovie: addMovie,
    movies: movies
  };
}]);//ends factory
