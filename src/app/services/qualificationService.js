app.factory('qualificationService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getQualifications = function () {
        return $http.get(serviceBase + 'api/qualification/all')
            .success(function (data) {
                return data;
            })
            .error(function (response) {
                return response;
            });
    };
    
    service.getQualifications = _getQualifications;  
    
    return service;
}]);