app.controller('headerController', ['$scope', 'projectService', function ($scope, projectService) {
      
    $scope.init = function () {
        projectService.getProjects().then(
            function (response) {
                if(response.status == 200) {
                    $scope.projects = response.data;
                }
                else {
                    $scope.projects = null;
                }
            }  
        );
    };
    
    $scope.init();
    
}]);