var mainApp = angular.module("mainApp", [ 'ngRoute', 'ngCookies' ]);

var loginApp = angular.module("loginApp", [ 'ngCookies' ]);

mainApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'projects.html',
		controller : 'ProjectController'
	});
	$routeProvider.when('/projects', {
		templateUrl : 'projects.html',
		controller : 'ProjectController'
	});
	$routeProvider.when('/stories', {
		templateUrl : 'stories.html',
		controller : 'StoryController'
	});
	$routeProvider.when('/storytask', {
		templateUrl : 'storytask.html',
		controller : 'StoryTaskController'
	});
	$routeProvider.when('/reviewCommentsAndBugs', {
		templateUrl : 'reviewCommentsAndBugs.html',
		controller : 'reviewCommentsAndBugsController'
	});
	$routeProvider.when('/defectLeakageMatrics', {
		templateUrl : 'defectLeakageMatrics.html',
		controller : 'defectLeakageMatricsController'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
} ]);
