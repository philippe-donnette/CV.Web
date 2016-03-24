app.controller('projectController', ['$scope', '$stateParams', 'projectService', function ($scope, $stateParams, projectService) {

    
    var init = function () {
        projectService.getProject($stateParams.id).then(
            function (project) {
                $scope.project = project;
                return loadProjectDetails($scope.project.id);
            },
            function (error) {
            }
        );
    };
    
    var loadProjectDetails = function (id) {
        loadSkills(id);    
        loadImages(id);
    };
    
    var loadSkills = function (id) {
        return projectService.getSkills(id).then(
            function (data) {
                $scope.project.tags = data;
            },
            function () {
                $scope.tags = null;
            }
        );    
    };
    
    var loadImages = function (id) {
        return projectService.getImages(id).then(
            function (data) {
                $scope.project.images = data;
            },
            function () {
                $scope.project.images = null;
            }
        );    
    };
    
    init();
    
}]);