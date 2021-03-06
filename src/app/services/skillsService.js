app.factory('skillsService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getSkills = function () {
        return $http.get(serviceBase + 'api/skill/all')
            .then(function (response) {
                return response.data;
            });
    };
    
    service.getSkills = _getSkills; 
    
    return service;
}]);