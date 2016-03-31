app.controller('experiencesController', ['$scope', 'experienceService', function ($scope, experienceService) {
    
    $scope.slides = [
        {
            image: 'http://lorempixel.com/601/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][0 % 4],
            id: 0
        },
        {
            image: 'http://lorempixel.com/602/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][1 % 4],
            id: 1
        },
        {
            image: 'http://lorempixel.com/603/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][2 % 4],
            id: 2
        },
        {
            image: 'http://lorempixel.com/604/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][3 % 4],
            id: 3
        }
    ];
        
    var init = function () {
        experienceService.getExperiences().then(
            function (data) {
                $scope.jobs = data;
            },
            function () {
                $scope.jobs = [];
            }  
        );
    };
    
    init();
        
}]);