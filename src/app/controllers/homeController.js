app.controller('homeController', ['$scope', 'appSettings', function ($scope, appSettings) {
    
    $scope.apiText = appSettings.apiUrl;
    
    
    $scope.someText = "Awesome";
    $scope.otherText = "This is terribly fantastic";
    
}]);