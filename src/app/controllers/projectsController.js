app.controller('projectsController', ['$scope', 'projectService', function ($scope, projectService) {

    projectService.getProjects().then(
        function (response) {
            $scope.projects = response.data;    
        },
        function (response) {
            $scope.projects = [];
        }    
    );

}]);