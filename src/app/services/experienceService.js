app.factory('experienceService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getExperience = function (id) {
        return $http.get(serviceBase + 'api/experience/' + id)
            .success(function (data) {
                return data;
            })
            .error(function (response) {
                return response;
            });
    };
    
    var _getExperiences = function () {
        return $http.get(serviceBase + 'api/experience/all')
            .success(function (data) {
                return data;
            })
            .error(function (response) {
                return response;
            });
    };
    
    var _getSkills = function (id) {
        return $http.get(serviceBase + 'api/experience/' + id + '/skills')
            .success(function (data) {
                return data;
            })
            .error(function (response) {
                return response;
            });
    };
    
    service.getExperience = _getExperience; 
    service.getExperiences = _getExperiences; 
    service.getSkills = _getSkills; 
    
    return service;
}]);