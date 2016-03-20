app.controller('projectController', ['$scope', '$stateParams', 'projectService', function ($scope, $stateParams, projectService) {

    
    $scope.init = function () {
        projectService.getProject($stateParams.id).then(
            function (response) {
                if(response.status == 200) {
                    $scope.project = response.data;
                    $scope.loadSkills($scope.project.id);
                    $scope.loadImages($scope.project.id);
                }
                else {
                    $scope.project = null; 
                }
            } 
        );    
    };
    
    $scope.loadSkills = function (id) { 
        projectService.getSkills(id).then(
            function (response) {
                if(response.status == 200) {
                    $scope.project.tags = response.data;
                }
                else {
                    $scope.project.tags = null;
                }
            }
        );    
    };
    
    $scope.loadImages = function (id) {
        projectService.getImages(id).then(
            function (response) {
                if(response.status == 200) {
                    $scope.project.images = response.data;
                }
                else {
                    $scope.project.images = null;
                }
            }
        );  
    };
    
    $scope.init();
    
}]);