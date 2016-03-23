app.controller('qualificationsController', ['$scope', 'qualificationService', function ($scope, qualificationService) {
    
    $scope.init = function () {
        qualificationService.getQualifications()
            .then(
                function (response) {
                    $scope.studies = response.data;
                },
                function (response) {
                    $scope.studies = null;
                    
                    $scope.studies = [
                        { id: 1, schoolName: "H.E.I.G" },
                        { id: 2, schoolName: "Martin Luther King" } 
                    ];
                }
            );
    };
    
    $scope.init();
}]);