app.controller('skillsController', ['$scope', 'skillsService', function ($scope, skillsService) {
    
    skillsService.getSkills().then(
        function (response) {
            if(response.status == 200) {
                $scope.tags = response.data;
                console.log(JSON.stringify(response));    
            }
            else {
                $scope.tags = [];
            }
        },
        function (response) {
            $scope.tags = [];
        }
    );
    
    /*
    $scope.tags = [
        { label: "AngularJS", weight: "10" },
        { label: "HTML", weight: "5" },
        { label: "Bootstrap", weight: "8" },
        { label: "LESS", weight: "8" },
        { label: "CSS", weight: "5" },
        { label: "Jenkins", weight: "3" },
        { label: "Gulp", weight: "5" },
        { label: "Bower", weight: "3" },
        { label: "NPM", weight: "3" },
        { label: "Visual Studio Code", weight: "10" },
        { label: "Font Awesome", weight: "4" },
        { label: "Karma", weight: "6" },
        { label: "Jasmine", weight: "6" },
        { label: "TDD", weight: "5" }
    ];*/
    
}]);