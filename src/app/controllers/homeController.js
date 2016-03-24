app.controller('homeController', ['$scope', 'personService', function ($scope, personService) {
    
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