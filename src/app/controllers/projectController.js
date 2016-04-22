app.controller('projectController', ['$scope', '$stateParams', 'projectService', function ($scope, $stateParams, projectService) {

    $scope.header = { iconClass: 'fa fa-suitcase', title: null };
    
    var init = function () {
        projectService.getProject($stateParams.id).then(
            function (project) {
                $scope.project = project;
                $scope.header.title = $scope.project.name;
                return loadProjectDetails($scope.project.id, $scope.project.name);
            },
            function (error) {
            }
        );
    };
    
    var loadProjectDetails = function (id, projectName) {
        loadSkills(id);    
        loadImages(id);
        loadBreadcrumb(projectName);
    };
    
    var loadBreadcrumb = function (currentPageTitle) {
        $scope.breadcrumb = [
            { title: 'Home', url: 'home', iconClass: 'fa fa-home' },
            { title: 'Projects', url: 'projects', iconClass: 'fa fa-suitcase' },
            { title: currentPageTitle, url: null, iconClass: 'fa fa-suitcase' }
        ];
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