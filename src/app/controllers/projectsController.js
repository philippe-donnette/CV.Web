app.controller('projectsController', ['$scope', 'projectService', function ($scope, projectService) {

    projectService.getProjects().then(
        function (data) {
            $scope.projects = data;    
        },
        function () {
            $scope.projects = [];
        }    
    );

}]);