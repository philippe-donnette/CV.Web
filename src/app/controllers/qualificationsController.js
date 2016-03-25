app.controller('qualificationsController', ['$scope', 'qualificationService', 'trainingService', function ($scope, qualificationService, trainingService) {
    
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
        trainingService.getTrainings()
            .then(
                function (data) {
                    $scope.trainings = data;
                },
                function () {
                    $scope.trainings = null;
                }
            );
    };
    
    init();
}]);