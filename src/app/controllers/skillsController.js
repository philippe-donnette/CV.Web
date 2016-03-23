app.controller('skillsController', ['$scope', 'skillsService', function ($scope, skillsService) {
    
    skillsService.getSkills().then(
        function (response) {
            $scope.tags = response.data;    
        },
        function (response) {
            $scope.tags = [];
        }
    );
    
}]);