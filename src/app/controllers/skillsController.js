app.controller('skillsController', ['$scope', 'skillsService', function ($scope, skillsService) {
    
    skillsService.getSkills().then(
        function (response) {
            if(response.status == 200) {
                $scope.tags = response.data;    
            }
            else {
                $scope.tags = [];
            }
        },
        function (response) {
            $scope.tags = [];
        }
    );
    
}]);