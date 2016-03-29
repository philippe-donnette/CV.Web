app.factory('personService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getPerson = function () { 
        return $http.get(serviceBase + 'api/person')
            .then(function (response) { return response.data; });
    };
    
    var _getCards = function () { 
        return $http.get(serviceBase + 'api/person/card/all') 
            .then(function (response) { return response.data; });
    };
    
    service.getPerson = _getPerson;
    service.getCards = _getCards;  
    
    return service;
}]);