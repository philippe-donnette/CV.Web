app.controller('skillsController', ['$scope', 'skillsService', function ($scope, skillsService) {
    
    $scope.header = { iconClass: 'glyphicon glyphicon-wrench', title: 'Skills' };
    $scope.breadcrumb = [
            { iconClass: 'fa fa-home', title: 'Home', url: 'root.home' },
            { iconClass: 'glyphicon glyphicon-wrench', title: 'Skills' }
        ];
    
    var init = function () { 
        skillsService.getSkills().then(
            function (data) {
                $scope.tags = data;    
            },
            function () {
                $scope.tags = [];
            }
        );
    };
    
    init();
    
}]);