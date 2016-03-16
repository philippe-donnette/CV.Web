app.controller('projectController', ['$scope', '$stateParams', 'projectService', function ($scope, $stateParams, projectService) {

    projectService.getProject($stateParams.id).then(
        function (response) {
            if(response.status == 200) {
                $scope.project = response.data;
                projectService.getSkills($scope.project.id).then(
                    function (response) {
                        if(response.status == 200) {
                            $scope.project.tags = response.data;
                        }
                        else {
                            $scope.project.tags = null;
                        }
                    }
                );
                
                projectService.getImages($scope.project.id).then(
                    function (response) {
                        if(response.status == 200) {
                            $scope.project.images = response.data;
                        }
                        else {
                            $scope.project.images = null;
                        }
                    }
                );
            }
            else {
                $scope.project = null; 
            }
        } 
    );    
    
}]);