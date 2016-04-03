app.controller('homeController', ['$scope', 'personService', function ($scope, personService) {
    
    $scope.header = { iconClass: 'fa fa-home', title: 'Home' };
    $scope.breadcrumb = [{ title: 'Home', iconClass: 'fa fa-home' }];
    
    var init = function () {
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