app.controller('homeController', ['$scope', 'personService', function ($scope, personService) {
    
    $scope.init = function () {
        personService.getPerson().then(
            function (response) {
                if(response.status == 200) {
                    $scope.person = response.data;
                }
                else {
                    $scope.person = null;
                }
            }    
        );    
    };
    
    $scope.init();
    
}]);