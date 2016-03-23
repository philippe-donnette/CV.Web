app.controller('experiencesController', ['$scope', 'experienceService', function ($scope, experienceService) {
        
        $scope.init = function () {
            experienceService.getExperiences().then(
                function (data) {
                    $scope.jobs = data;
                },
                function () {
                    $scope.jobs = [];
                }  
            );
        };
        
        $scope.init();
        
}]);