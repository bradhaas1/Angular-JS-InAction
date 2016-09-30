// Declate tope level Angello module
// Initialize every other module in the app

// myModule alias for 'Angello' top level module
var myModule = angular.module('Angello',
	[
		'ngRoute',
		'ngAnimate',
		'firebase',
		'ngMessages',
		'Angello.Common',
		'Angello.Dashboard',
		'Angello.Login',
		'Angello.Storyboard',
		'Angello.User',
		'auth0',
		'angular-jwt',
		'angular-storage'
	]);

myModule.config(function ($routeProvider) {
	// $routeProvider in somplest form responsible for associating a template and controller to a particular route
	$routeProvider

		.when('/', {
			templateUrl: 'src/angello/storyboard/tmpl/storyboard.html',
			controller: 'StoryboardCtrl',
			controllerAs: 'storyboard'
		})

		.when('/dashboard', {
			templateUrl: 'src/angello/dashboard/tmpl/dashboard.html',
			controller: 'DashboardCtrl',
			controllerAs: 'dashboard'

		})

		.when('/users', {
			templateUrl: 'src/angello/users/tmpl/users.html',
			controller: 'UsersCtrl',
			controllerAs: 'users'
		})

		.when('/users/:userId', {
			templateUrl: 'src/angello/users/tmpl/user.html',
			controller: 'UserCtrl',
			controllerAs: 'myUser'
		})

		.when('/login', {
			templateUrl: 'src/angello/login/tmpl/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'login'
		})



	$routeProvider

		// match a route if possible, otherwise redirect to application root
		.otherwise({redirectTo: '/' });
});