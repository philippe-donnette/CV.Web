app.controller('experienceController', ['$scope', function ($scope) {
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
                    { label: "ASP.NET MVC", weight: "10", iconClass: "devicons devicons-github" },
                    { label: "ASP.NET WebForm", weight: "5" },
                    { label: "WCF", weight: "3" },
                    { label: "SQL SERVER", weight: "9" },
                    { label: "PHP", weight: "1", iconClass: "devicons devicons-php" },
                    { label: "CSS", weight: "8" }
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
}]);