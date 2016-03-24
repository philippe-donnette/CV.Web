app.controller('qualificationsController', ['$scope', 'qualificationService', function ($scope, qualificationService) {
    
    var init = function () {
        qualificationService.getQualifications()
            .then(
                function (data) {
                    $scope.studies = data;
                },
                function () {
                    $scope.studies = null;
                }
            );
    };
    
    init();
}]);