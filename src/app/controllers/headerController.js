app.controller('headerController', ['$scope', 'projectService', function ($scope, projectService) {
      
    $scope.init = function () {
        projectService.getProjects().then(
            function (response) {
                $scope.projects = response.data;
            },
            function (response) {
                $scope.projects = null;
            }  
        );
    };
    
    $scope.init();
    
}]);