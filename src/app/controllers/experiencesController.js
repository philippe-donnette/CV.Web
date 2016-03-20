app.controller('experiencesController', ['$scope', 'experienceService', function ($scope, experienceService) {
        
        experienceService.getExperiences().then(
            function (response) {
                if(response.status == 200) {
                    $scope.jobs = response.data;
                }
                else {
                    $scope.jobs = [];
                }
            },
            function (response) {
                $scope.jobs = [];
            }  
        );
        
        /*
        $scope.jobs = [
            { 
                company: "University of London",
                role: "Senior Developer", 
                description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read",
                logoImageSrc: "./images/experience/uol-experience-icon.png",
                link: "http://www.london.ac.uk",
                startDate: "2012-04-17",
                endDate: "2016-06-25", 
                tags: [
                    { name: "ASP.NET MVC", weight: "10", iconClass: "devicons devicons-github" },
                    { name: "ASP.NET WebForm", weight: "5" },
                    { name: "WCF", weight: "3" },
                    { name: "SQL SERVER", weight: "9" },
                    { name: "PHP", weight: "1", iconClass: "devicons devicons-php" },
                    { name: "CSS", weight: "8" }
                ]                 
            },
            { 
                company: "DOCDATA Limited",
                role: "Senior Developer", 
                description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read",
                logoImageSrc: "./images/experience/docdata-experience-icon.png",
                link: "http://www.docdata.co.uk",
                startDate: "2011-04-01",
                endDate: "2012-03-20",
                tags: [
                    { label: "ASP.NET MVC", weight: "10" },
                    { label: "ASP.NET WebForm", weight: "5" },
                    { label: "WCF", weight: "3" },
                    { label: "SQL SERVER", weight: "9" },
                    { label: "PHP", weight: "1" },
                    { label: "CSS", weight: "8" }
                ] 
            }
        ];
        */
}]);