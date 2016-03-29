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
                //$scope.cards = null;
                
                $scope.cards = [ 
                    { rotate: "x", imageFrontUrl: "card-contact.jpg", textFront: null, caption: "Family", captionIconClass: "fa fa-group", textBack: "Happy father of two, one boy Matti and one girl Leila", imageBackUrl: null },
                    { rotate: "y", imageFrontUrl: "card-contact.jpg", textFront: null, caption: "Location", captionIconClass: "fa fa-map-marker", textBack: "London SE8<br />United Kingdom", imageBackUrl: null }
                ];
            }    
        );    
    };
    
    init();
    
}]);