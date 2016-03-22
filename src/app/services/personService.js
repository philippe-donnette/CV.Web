app.factory('personService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getPerson = function () { 
        return $http.get(serviceBase + 'api/person').then(function (response) {
            return response;
        });
    };
    
    service.getPerson = _getPerson;  
    
    return service;
}]);