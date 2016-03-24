app.controller('projectsController', ['$scope', 'projectService', function ($scope, projectService) {

    var init = function () { 
        projectService.getProjects().then(
            function (data) {
                $scope.projects = data;    
            },
            function () {
                $scope.projects = [];
            }    
        );
    };
    
    init();

}]);