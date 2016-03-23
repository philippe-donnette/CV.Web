app.controller('experiencesController', ['$scope', 'experienceService', function ($scope, experienceService) {
        
        experienceService.getExperiences().then(
            function (response) {
                $scope.jobs = response.data;
            },
            function (response) {
                $scope.jobs = [];
            }  
        );
        
}]);