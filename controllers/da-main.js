/** Created By - Dharmendra Ahirwar
	Date - 17 November 2015
	Version - 1.0.0.0
*/
var daApp = angular.module('daMyApp',['ngRoute','ngSanitize']);

daApp.service('CallService', function(){
    this.headingTitle = function(text) {
       return text;
    }
 });

daApp.factory('CallFactory', function(){
    return {
        headingSubTitle: function(text){
            return text;
        }
    }
});

daApp.controller('daNavControl',function($scope, $location, CallService, CallFactory){
	$scope.headingTitle = CallService.headingTitle("Dharmendra Ahirwar");
	$scope.headingSubTitle = CallFactory.headingSubTitle("Web/Front-end/UI Developer");
    
    $scope.navData = [
	{navText:'About Me', navLink:'about'},
	{navText:'Portfolio', navLink:'portfolio'},
	{navText:'Resume', navLink:'resume'},
	{navText:'Skill', navLink:'skills'},
	{navText:'Education', navLink:'education'},
	{navText:'Contact', navLink:'contact'}];
	
	var path = $location.path();
    $scope.paths = path.slice(1,20);
    angular.forEach($scope.navData, function(item){
        if($scope.paths == item.navLink){            angular.element(document.querySelector('#'+$scope.paths)).addClass('active');
        }else{
            angular.element(document.querySelector('#'+item.navLink)).removeClass('active');
        }
    });
});


daApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'daNavControl'
        }).
        when('/resume', {
            templateUrl: 'partials/resume.html',
            controller: 'daNavControl'
        }).
        when('/portfolio', {
            templateUrl: 'partials/portfolio.html',
            controller: 'daNavControl'
        }).
        when('/skills', {
            templateUrl: 'partials/skills.html',
            controller: 'daNavControl'
        }).
        when('/education', {
            templateUrl: 'partials/education.html',
            controller: 'daNavControl'
        }).
        when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'daNavControl'
        }).
        otherwise({
            redirectTo: '/about'
        });
}]);