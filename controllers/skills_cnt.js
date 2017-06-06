daApp.controller('skillsCnt', function($scope){
    $scope.skills = "Skills";
    $scope.tech = "Technical";
    $scope.nonTech = "Non-Technical";
    
	$scope.technicalSkills = ['HTML 4/5','CSS 2/3','JavaScript','AngularJS','Node.js','Reactjs','jQuery','Gulp','AJAX','angular ui-grid','Java','PHP','Maven','C3/D3 Charts','JSON','Gherkin','CucumberJS','AlloyUI','jqGrid','SASS','Bootstrap','Responsive Web Design','Cross Browser Compatibility','Liferay UI','MySQL','Manual Testing','Automation Testing','GitHub','SVN','JIRA','Bitbucket','Adobe Photoshop','Eclipse','E-commerce'];
    
	$scope.NonTechnicalSkills = ['Team Lead', 'Customer Relationship', 'Project Coordination', 'Code Reviews', 'Presentations'];
});