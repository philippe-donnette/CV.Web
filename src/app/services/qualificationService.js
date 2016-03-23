app.factory('qualificationService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getQualifications = function () {
        return $http.get(serviceBase + 'api/qualification/all')
            .then(function (response) {
                return response.data;
            });
    };
    
    service.getQualifications = _getQualifications;  
    
    return service;
}]);