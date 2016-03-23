app.controller('homeController', ['$scope', 'personService', function ($scope, personService) {
    
    $scope.init = function () {
        personService.getPerson().then(
            function (data) {
                $scope.person = data;
            },
            function () {
                $scope.person = null;
            }    
        );    
    };
    
    $scope.init();
    
}]);