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
                        { id: 1, schoolName: "H.E.I.G" },
                        { id: 2, schoolName: "Martin Luther King" } 
                    ];
                }
            );
    };
    
    init();
}]);