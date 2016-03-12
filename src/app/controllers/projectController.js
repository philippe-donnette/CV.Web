app.controller('projectController', ['$scope', '$stateParams', 'projectService', function ($scope, $stateParams, projectService) {

    projectService.getProject($stateParams.id).then(
        function (response) {
            if(response.status == 200) {
                $scope.project = response.data;
                projectService.getSkills($scope.project.id).then(
                    function (response) {
                        if(response.status == 200) {
                            $scope.project.tags = response.data;
                        }
                        else {
                            $scope.project.tags = null;
                        }
                    }
                );
            }
            else {
                $scope.project = null;
            }
        }
    );    
    
    /*
    $scope.project = {
        id: $stateParams.id,
        title: $stateParams.title,
        description: "Some text describing the <b>whole project</b>, what this is about, why. To give some context or an idea about the skills for this job",
        tags: [
            { name: "AngularJS", weight: "10", iconClass: "devicons devicons-angular" },
            { name: "HTML", weight: "5", iconClass: "mfizz mfizz-html" },
            { name: "Bootstrap", weight: "8", iconClass: "devicons devicons-bootstrap" },
            { name: "LESS", weight: "8", iconClass: "devicons devicons-less" },
            { name: "CSS", weight: "5", iconClass: "mfizz mfizz-css" },
            { name: "Jenkins", weight: "3", iconClass: "devicons devicons-jenkins" },
            { name: "Gulp", weight: "5", iconClass: "devicons devicons-gulp" },
            { name: "Bower", weight: "3", iconClass: "devicons devicons-bower" },
            { name: "NPM", weight: "3", iconClass: "devicons devicons-npm" },
            { name: "Visual Studio Code", weight: "10", iconClass: "devicons devicons-visualstudio" },
            { name: "Font Awesome", weight: "4", iconClass: "devicons devicons-jenkins" },
            { name: "Karma", weight: "6" },
            { name: "Jasmine", weight: "6" },
            { name: "TDD", weight: "5" }
        ],
        images: [
            { id: 1, url: "images/projects/gallery/img1.png", title: "Image 1" },
            { id: 2, url: "images/projects/gallery/img2.png", title: "Iron Man" },
            { id: 3, url: "images/projects/gallery/thor.jpg", title: "Thor" }
        ]  
    };
    */
}]);