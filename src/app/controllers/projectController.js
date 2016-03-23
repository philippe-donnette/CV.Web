app.controller('projectController', ['$scope', '$stateParams', 'projectService', function ($scope, $stateParams, projectService) {

    
    $scope.init = function () {
        projectService.getProject($stateParams.id).then(
            function (response) {
                $scope.project = response.data;
                $scope.loadSkills($scope.project.id);
                $scope.loadImages($scope.project.id);
            },
            function (response) {
                $scope.project = null; 
            } 
        );    
    };
    
    $scope.loadSkills = function (id) { 
        projectService.getSkills(id).then(
            function (response) {
                $scope.project.tags = response.data;
            },
            function (response) {
                $scope.project.tags = null;
            }
        );    
    };
    
    $scope.loadImages = function (id) {
        projectService.getImages(id).then(
            function (response) {
                $scope.project.images = response.data;
            },
            function (response) {
                $scope.project.images = null;
            }
        );  
    };
    
    $scope.init();
    
}]);