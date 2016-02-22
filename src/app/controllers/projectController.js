app.controller('projectController', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.project = {
        id: $stateParams.id,
        title: $stateParams.title,
        description: "Some text describing the <b>whole project</b>, what this is about, why. To give some context or an idea about the skills for this job",
        tags: [
            { label: "AngularJS", weight: "10", iconClass: "devicons devicons-angular" },
            { label: "HTML", weight: "5", iconClass: "mfizz mfizz-html" },
            { label: "Bootstrap", weight: "8", iconClass: "devicons devicons-bootstrap" },
            { label: "LESS", weight: "8", iconClass: "devicons devicons-less" },
            { label: "CSS", weight: "5", iconClass: "mfizz mfizz-css" },
            { label: "Jenkins", weight: "3", iconClass: "devicons devicons-jenkins" },
            { label: "Gulp", weight: "5", iconClass: "devicons devicons-gulp" },
            { label: "Bower", weight: "3", iconClass: "devicons devicons-bower" },
            { label: "NPM", weight: "3", iconClass: "devicons devicons-npm" },
            { label: "Visual Studio Code", weight: "10", iconClass: "devicons devicons-visualstudio" },
            { label: "Font Awesome", weight: "4", iconClass: "devicons devicons-jenkins" },
            { label: "Karma", weight: "6" },
            { label: "Jasmine", weight: "6" },
            { label: "TDD", weight: "5" }
        ],
        images: [
            { id: 1, url: "images/projects/gallery/img1.png", title: "Image 1" },
            { id: 2, url: "images/projects/gallery/img2.png", title: "Iron Man" },
            { id: 3, url: "images/projects/gallery/thor.jpg", title: "Thor" }
        ]  
    };
    
}]);