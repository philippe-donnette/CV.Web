app.factory('projectService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getProjects = function () {
        return $http.get(serviceBase + 'api/project/all').then(function (response) {
            return response;
        });
    };
    
    service.getProjects = _getProjects; 
    
    return service;
}]);