app.factory('projectService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getImages = function (id) {
        return $http.get(serviceBase + 'api/project/' + id + '/images').then(function (response) {
            return response.data;
        });
    };

    var _getProject = function (id) {
        return $http.get(serviceBase + 'api/project/' + id).then(function (response) {
            return response.data;
        });
    };
    
    var _getProjects = function () {
        return $http.get(serviceBase + 'api/project/all').then(function (response) {
            return response.data;
        });
    };
    
    var _getSkills = function (id) {
        return $http.get(serviceBase + 'api/project/' + id + '/skills')
            .then(function (response) {
                return response.data;
            });
    };
    
    service.getImages = _getImages;
    service.getProject = _getProject; 
    service.getProjects = _getProjects; 
    service.getSkills = _getSkills; 
    
    return service;
}]);