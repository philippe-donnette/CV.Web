app.controller('headerController', ['$scope', 'projectService', function ($scope, projectService) {
      
    /*    
    $scope.projects = [
        { href: "root.project({ id: 10, title: 'cv' })", title: "cv", id: 1 },
        { href: "root.project({ id: 8, title: 'deptford-park-football' })", title: "Deptford Park Football", id: 2 }
    ];
    */
    
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