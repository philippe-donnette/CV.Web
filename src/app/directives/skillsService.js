app.factory('SkillsService', ['$http', '$q', 'appSettings', function ($http, $q, appSettings) {

    var serviceBase = appSettings.apiUrl;
    var service = {};

    var _getSkills = function () {
        return $http.get(serviceBase + 'api/skills/all').then(function (response) {
            return response;
        });
    };
    
    service.getSkills = _getSkills;
    
    return service;
}]);