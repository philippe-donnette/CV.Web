app.controller('experiencesController', ['$scope', 'experienceService', function ($scope, experienceService) {
        
    var init = function () {
        experienceService.getExperiences().then(
            function (data) {
                $scope.jobs = data;
            },
            function () {
                $scope.jobs = [];
            }  
        );
    };
    
    init();
        
}]);