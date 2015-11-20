/** Created By - Dharmendra Ahirwar
	Date - 17 November 2015
	Version - 1.0.0.0
*/
var daApp = angular.module('daMyApp',['ngRoute']);

daApp.controller('daHeadingControl', function($scope){
	$scope.headingTitle = "Dharmendra Ahirwar";
	$scope.headingSubTitle = "Web/Front-end/UI Developer";
});

daApp.controller('daNavControl',function($scope){
	$scope.navData = [
	{navText:'About Me', navLink:'#about'},
	{navText:'Portfolio', navLink:'#/portfolio'},
	{navText:'Resume', navLink:'#/resume'},
	{navText:'Skill', navLink:'#/skills'},
	{navText:'Education', navLink:'#/education'},
	{navText:'Contact', navLink:'#/contact'}];
	
	$scope.navLink = $scope.navData.navLink;
});

daApp.controller('daFooter',function($scope){
	$scope.copyrightText = "DA-one maintained by";
	$scope.copyrightLinkText = "Dharmendraa";
	$scope.copyrightLink = "https://github.com/dharmendraa";
	$scope.PublishedText = "Published with";
	$scope.PublishedLinkText = "GitHub Pages";
	$scope.PublishedLink = "https://pages.github.com";
	
});

daApp.controller('daSkills', function($scope){
	$scope.skills = ['HTML 4/5','CSS 2/3','JavaScript','AJAX','jQuery','AngularJS', 'Node.js','AlloyUI','jqGrid','JSON','SASS','Bootstrap','Responsive Web Design','Cross Browser Compatibility','Liferay UI','PHP','Drupal','MySQL','Manual Testing','SVN','JIRA','Bitbucket','GitHub','Adobe Photoshop','Dreamweaver','E-commerce'];
});

daApp.controller('daResumeControl',function($scope){
	//$scope.resumeData = resData;	
});

daApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/about', {
				templateUrl: 'tpl/about.html',
				controller: 'daNavControl'
			}).
			when('/resume', {
				templateUrl: 'tpl/resume.html',
				controller: 'daNavControl'
			}).
			when('/portfolio', {
				templateUrl: 'tpl/portfolio.html',
				controller: 'daNavControl'
			}).
			when('/skills', {
				templateUrl: 'tpl/skills.html',
				controller: 'daNavControl'
			}).
			when('/education', {
				templateUrl: 'tpl/education.html',
				controller: 'daNavControl'
			}).
			when('/contact', {
				templateUrl: 'tpl/contact.html',
				controller: 'daNavControl'
			}).
			otherwise({
				redirectTo: '/about'
			});
}]);

