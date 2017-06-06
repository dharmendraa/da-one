daApp.controller('resumeCnt', function($scope){
    $scope.pageHeader = "Resume";
    
    var resData = [
    {
        "title": "2016 - Present: Sr. Developer at Capital One, Plano, Texas",
        "rdata": {
            "1": "Web application development for the user with optimal viewing and interactive experience to work on financial business data.",
            "2": "Front-end web development: HTML 5, CSS2/3, JavaScript, AngularJS, Node.js, jQuery, AJAX, Bootstrap and SASS",
            "3": "Back-end web development: Java, Maven, Eclipse",
            "4": "Using Angular ui-grid library to display business data on the browser",
            "5": "Creating Pivot Table to display all combination data using pivot library.  ",
            "6": "Using D3/C3 Chart Library for the charts",
            "7": "Consuming/Developing RESTful API’s which developed and maintained using Swagger framework.",
            "8": "Using tools like Git, JIRA for version control and bug tracking.",
            "9": "Following agile software development methodology or more precisely Scrum, for time tracking, to understand the critical deliverables, and for status updates in deliverables."
        }
    },
    {
        "title": "2016 - 2016: Sr. Software Engineer at Sabre, Southlake, Texas",
        "rdata": {
            "1": "Front-end web development: HTML 5, CSS2/3, JavaScript, AngularJS, Node.js, jQuery, AJAX, Bootstrap and SASS",
            "2": "Back-end web development: Java, Maven, Eclipse",
            "3": "Mentoring the UI team members (contract as well as fulltime staff); providing technical expertise for implementing better solution, involved in Code reviews",
            "4": "Collaboration with UX, design, and stakeholders",
            "5": "This application is design to run on amazon webserver cloud environments AWS",
            "6": "Worked on multiple components for flight booking (B2C and MYB path) using AngularJS",
            "7": "Implemented Cross-Browser Development and Page Optimization Techniques",
            "8": "Defect tracking/fixing using JIRA and subversion control using Git",
            "9": "Followed agile software development methodology or more precisely Scrum, for time tracking, to understand the critical deliverables, and for status updates in deliverables."
        }
    },
    {
        "title": "2014 - 2015: Sr. UI Developer at AON Hewitt, Illinois",
        "rdata": {
            "1": "Front-end web development: HTML 5, CSS2/3, JavaScript, AJAX, Bootstrap and SASS",
            "2": "JS lib’s/frameworks: AlloyUI, AngularJS, Node.js",
            "3": "Back-end web development: Java, Java Liferay Framework",
            "4": "Collaboration with UX, design, and stakeholders",
            "5": "Implemented Cross-Browser Development and Page Optimization Techniques",
            "5": "Defect tracking/fixing using JIRA and subversion control using SVN",
            "6": "Following agile software development practice programming, test driven development and scrum status meetings"
        }
    },
    {
        "title": "2014: Sr. UI Developer at Liquidity Services Inc, Texas",
        "rdata": {
            "1": "Front-end web development: HTML 5, CSS2/3, JavaScript, jQuery, AJAX",
            "2": "JS lib’s/frameworks: jQuery with some other jQuery library, AngularJS",
            "3": "Back-end web development: Java, Java Liferay Framework",
            "4": "Collaborate with Build Team to integrate Theme, front-end code with the backend technology and Liferay portal framework, to ensure the UX / UI is implemented",
            "5": "Defect tracking/fixing using JIRA and subversion control using Bitbucket and Git",
            "5": "Followed agile software development methodology"
        }
    },
    {
        "title": "2010 - 2014: Sr. UI Developer at J. P. Morgan Chase, New York and India",
        "rdata": {
            "1": "Front-end web development: HTML 4/5, CSS2/3, JavaScript, jQuery, Bootstrap, AJAX",
            "2": "JS lib’s/frameworks: jQuery with some other jQuery library, jqGrid",
            "3": "Back-end web development: Java, Java Liferay Framework, Fatwire framework, SmartClient framework",
            "4": "Collaborate with the backend technology to ensure the UX / UI is implemented",
            "5": "Defect tracking/fixing using JIRA and subversion control using Bitbucket and Git",
            "5": "Followed agile software development methodology",
            "6": "UI Team Lead and Task Management"
        }
    },
    {
        "title": "2010: Sr. UI Developer at Annet Technologies, India",
        "rdata": {
            "1": "Front-end web development: PHP, MySQL, HTML, CSS, JavaScript, AJAX",
            "2": "JS lib’s/frameworks: jQuery",
            "3": "Analysis, develop and troubleshoot complex PHP/MYSQL code",
            "4": "Collaboration with UX, design, and stakeholders",
            "5": "Applied JQuery scripts for basic animation and end user screen customization purposes",
            "5": "Responsible for creating the screens with table-less designs meeting W3C standards",
            "6": "Code Version Control and Subversion using SVN"
        }
    },
    {
        "title": "2006 - 2010: Sr. UI Developer at Exa India Pvt. Ltd., India",
        "rdata": {
            "1": "Front-end web development: PHP, MySQL, HTML, CSS, JavaScript, AJAX",
            "2": "JS lib’s/frameworks: jQuery",
            "3": "Analysis, develop and troubleshoot complex PHP/MYSQL code",
            "4": "Collaboration with UX, design, and stakeholders",
            "5": "Applied JQuery scripts for basic animation and end user screen customization purposes",
            "5": "Responsible for creating the screens with table-less designs meeting W3C standards",
            "6": "Code Version Control and Subversion using SVN"
        }
    }
    ];
    
    $scope.resumeData = resData;
    
    
});