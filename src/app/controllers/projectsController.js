app.controller('projectsController', ['$scope', 'projectService', function ($scope, projectService) {

    $scope.header = { iconClass: 'fa fa-suitcase', title: 'Projects' };
    $scope.breadcrumb = [
        { iconClass: 'fa fa-home', title: 'Home', url: 'root.home' },
        { iconClass: 'fa fa-suitcase', title: 'Projects' }
    ];

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