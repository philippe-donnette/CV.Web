app.controller('aboutController', ['$scope', 'personService', function ($scope, personService) {
    
    var init = function () {
        loadPerson();
        loadCards();    
    };
    
    var loadPerson = function () {
        return personService.getPerson().then(
            function (data) {
                $scope.person = data;
            },
            function () {
                $scope.person = null;
            }    
        );    
    };
    
    var loadCards = function () {
        return personService.getCards().then(
            function (data) {
                $scope.cards = data;
            },
            function () {
                $scope.cards = null;
            }    
        );    
    };
    
    init();
    
}]);