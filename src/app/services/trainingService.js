app.factory('trainingService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getTrainings = function () {
        return $http.get(serviceBase + 'api/training/all')
            .then(function (response) {
                return response.data;
            });
    };
    
    service.getTrainings = _getTrainings;  
    
    return service;
}]);