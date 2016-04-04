app.controller('qualificationsController', ['$scope', 'qualificationService', 'trainingService', function ($scope, qualificationService, trainingService) {
    
    $scope.header = { iconClass: 'glyphicon glyphicon-education', title: 'Qualifications' };
    $scope.breadcrumb = [
        { iconClass: 'fa fa-home', title: 'Home', url: 'root.home' },
        { iconClass: 'glyphicon glyphicon-education', title: 'Qualifications' }
    ];
    
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