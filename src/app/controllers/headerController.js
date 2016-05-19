app.controller('headerController', ['$scope', 'projectService', 'personService', function ($scope, projectService, personService) {
      
    var init = function () {
        projectService.getProjects().then(
            function (data) {
                $scope.projects = data;
            },
            function () {
                $scope.projects = null;
            }  
        );
        personService.getPerson().then(
            function (data) {
                $scope.person = data;
            },
            function () {
                $scope.person = null;
            }  
        );
    };
    
    init();
    
}]);