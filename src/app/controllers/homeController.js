app.controller('homeController', ['$scope', 'personService', function ($scope, personService) {
    
    $scope.init = function () {
        personService.getPerson().then(
            function (response) {
                $scope.person = response.data;
            },
            function (response) {
                $scope.person = null;
            }    
        );    
    };
    
    $scope.init();
    
}]);