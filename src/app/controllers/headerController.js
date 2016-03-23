app.controller('headerController', ['$scope', 'projectService', function ($scope, projectService) {
      
    $scope.init = function () {
        projectService.getProjects().then(
            function (data) {
                $scope.projects = data;
            },
            function () {
                $scope.projects = null;
            }  
        );
    };
    
    $scope.init();
    
}]);