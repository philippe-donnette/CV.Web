app.controller('skillsController', ['$scope', 'skillsService', function ($scope, skillsService) {
    
    var init = function () { 
        skillsService.getSkills().then(
            function (data) {
                $scope.tags = data;    
            },
            function () {
                $scope.tags = [];
            }
        );
    };
    
    init();
    
}]);