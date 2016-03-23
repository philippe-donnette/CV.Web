app.controller('skillsController', ['$scope', 'skillsService', function ($scope, skillsService) {
    
    skillsService.getSkills().then(
        function (data) {
            $scope.tags = data;    
        },
        function () {
            $scope.tags = [];
        }
    );
    
}]);