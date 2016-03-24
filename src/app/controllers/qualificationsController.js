app.controller('qualificationsController', ['$scope', 'qualificationService', function ($scope, qualificationService) {
    
    var init = function () {
        qualificationService.getQualifications()
            .then(
                function (data) {
                    $scope.studies = data;
                },
                function () {
                    $scope.studies = null;
                    
                    $scope.studies = [
                        { 
                            id: 1, 
                            schoolName: "H.E.I.G", 
                            startDate: new Date(2003, 9, 1), 
                            endDate: new Date(2005, 7, 31),
                            imageUrl: 'heig.png',
                            city: 'Paris',
                            country: 'France',
                            subject: 'BTS informatique de gestion',
                            description: '<p>some blah blah, some blah blah, some blah blah, some blah blah</p>',
                            websiteUrl: null,
                            degreeFile: 'heig.pdf'
                        },
                        { 
                            id: 2, 
                            schoolName: "Martin Luther King",
                            startDate: new Date(1998, 9, 1), 
                            endDate: new Date(2000, 7, 31),
                            imageUrl: null,
                            city: 'Paris',
                            country: 'France',
                            subject: 'Terminal S technology',
                            description: '<p>some blah blah, some blah blah, some blah blah, some blah blah</p>',
                            websiteUrl: 'http://www.google.co.uk',
                            degreeFile: null
                        } 
                    ];
                }
            );
    };
    
    init();
}]);