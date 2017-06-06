daApp.controller('portfolioCnt', function($scope){
    $scope.pageHeader = "Portfolio";
    
    var portfolioData = [
    {
        "title": "Sabre Airline Solutions",
        "img": "noImg.png",
        "pdata": [
            {
                "project": "Digital Experience Platform",
                "url": "No URL available as it is not live yet."
            }
        ]
    },
    {
        "title": "AON Hewitt",
        "img": "noImg.png",
        "pdata": [
            {
                "project": "Health Medical Plan",
                "url": "No URL available as it was an intranet project.",
                "href": false
            }
        ]
    },
    {
        "title": "Liquidity Services Inc.",
        "img": "liquidityServicesInc.jpg",
        "pdata": [
            {
                "project": "Liquidity Services Corporate Website",
                "url": "https://www.liquidityservices.com/",
                "href": true
            }
        ]
    },
    {
        "title": "J. P. Morgan Chase",
        "img": "noImg.png",
        "pdata": [
            {
                "project": "Liquidity Risk Infrastructure",
                "url": "No URL available as it was an intranet project.",
                "href": false
            },
            {
                "project": "AWM Content Entry for e-Marketing Team",
                "url": "No URL available as it was an intranet project.",
                "href": false
            },
            {
                "project": "GCE Usability Engineering",
                "url": "No URL available as it was an intranet project.",
                "href": false
            }
        ]
    },
    {
        "title": "Annet Technologies",
        "img": "noImg.png",
        "pdata": [
            {
                "project": "Salesday Net",
                "url": "No URL available as it was an intranet project.",
                "href": false
            }
        ]
    },
    {
        "title": "Exa India Pvt. Ltd.",
        "img": "exaJobs.jpg",
        "pdata": [
            {
                "project": "Exa Jobs",
                "url": "http://www.exa.co.in/jobs/",
                "href": true
            },
            {
                "project": "Fire Rating Solutions",
                "url": "http://www.fireratingsolutions.com.au/",
                "href": true
            },
            {
                "project": "Pack & Send",
                "url": "http://www.packsend.com.au/",
                "href": true
            },
            {
                "project": "Showcase Jewellers",
                "url": "http://www.showcasejewellers.com.au/",
                "href": true
            }
        ]
    }
    ];
    
    $scope.portfolioData = portfolioData;
});