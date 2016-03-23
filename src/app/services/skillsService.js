app.factory('skillsService', ['$http', 'appSettings', function ($http, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getSkills = function () {
        return $http.get(serviceBase + 'api/skill/all')
            .success(function (data) {
                return data;
            })
            .error(function (response) {
                return response;
            });
    };
    
    service.getSkills = _getSkills; 
    
    return service;
}]);