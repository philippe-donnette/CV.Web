app.factory('personService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getPerson = function () { 
        return $http.get(serviceBase + 'api/person')
            .success(function (data) {
                return data;
            })
            .error(function (response) {
                return response;
            });
    };
    
    service.getPerson = _getPerson;  
    
    return service;
}]);