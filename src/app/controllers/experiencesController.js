app.controller('experiencesController', ['$scope', 'experienceService', function ($scope, experienceService) {
    
    $scope.header = { iconClass: 'fa fa-lightbulb-o', title: 'Experience' };
    $scope.breadcrumb = [
        { iconClass: 'fa fa-home', title: 'Home', url: 'home' },
        { iconClass: 'fa fa-lightbulb-o', title: 'Experience' }
    ];
      
    var init = function () {
        experienceService.getExperiences().then(
            function (data) {
                $scope.jobs = data;
            },
            function () {
                $scope.jobs = [];
            }  
        );
    };
    
    init();
        
}]);