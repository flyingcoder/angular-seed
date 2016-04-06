angular
	.module('myApp', [
	  'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  		$urlRouterProvider.otherwise('/');

  		$stateProvider
  			.state('home', {
  				url: '/',
  				templateUrl: 'outer-pages/home.html',
  				controller: function($scope){
  					$scope.title = "Home";
  				}
  			})
  			.state('about', {
  				url: '/about',
  				templateUrl: 'outer-pages/about.html'
  			})
}]);
