app.controller('projectController', ['$scope', '$stateParams', 'projectService', function ($scope, $stateParams, projectService) {

    
    $scope.init = function () {
        projectService.getProject($stateParams.id).then(
            function (data) {
                $scope.project = data;
                $scope.loadSkills($scope.project.id);
                $scope.loadImages($scope.project.id);
            },
            function () {
                $scope.project = null; 
            } 
        );    
    };
    
    $scope.loadSkills = function (id) { 
        projectService.getSkills(id).then(
            function (data) {
                $scope.project.tags = data;
            },
            function () {
                $scope.project.tags = null;
            }
        );    
    };
    
    $scope.loadImages = function (id) {
        projectService.getImages(id).then(
            function (data) {
                $scope.project.images = data;
            },
            function () {
                $scope.project.images = null;
            }
        );  
    };
    
    $scope.init();
    
}]);