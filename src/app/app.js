var app = angular.module('dnApp', ['ngSanitize', 'ui.router', 'ui.bootstrap', 'wu.masonry']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/", "/home");
    
    $urlRouterProvider.otherwise("/home");
    
    $stateProvider
        .state('root',{
          url: '',
          abstract: true,
          views: {
            'header': {
              templateUrl: 'app/views/header.html',
              controller: 'headerController'
            },
            'footer':{
              templateUrl: 'app/views/footer.html',
              controller: 'footerController'
            }
          }
        })
        .state('root.home', {
            url: '/home',
            views: {
                'container@': {
                    templateUrl: 'app/views/home.html',
                    controller: 'homeController'       
                }
            }
        })
        .state('root.qualifications', {
            url: '/qualifications-training',
            views: {
                'container@': {
                    templateUrl: 'app/views/qualifications.html',
                    controller: 'qualificationsController'       
                }
            }
        })
        .state('root.experiences', {
            url: '/experiences',
            views: {
                'container@': {
                    templateUrl: 'app/views/experiences.html',
                    controller: 'experiencesController'       
                }
            }
        })
        .state('root.about', {
            url: '/about',
            views: {
                'container@': {
                    templateUrl: 'app/views/about.html',
                    controller: 'aboutController'       
                }
            }
        })
        .state('root.skills', {
            url: '/skills',
            views: {
                'container@': {
                    templateUrl: 'app/views/skills.html',
                    controller: 'skillsController'       
                }
            }
        })
        .state('root.projects', {
            url: '/projects',
            views: {
                'container@': {
                    templateUrl: 'app/views/projects.html',
                    controller: 'projectsController'       
                }
            }
        })
        .state('root.project', {
            url: '/projects/:title/:id',
            views: {
                'container@': {
                    templateUrl: 'app/views/project.html',
                    controller: 'projectController'       
                }
            }
        });
        
    $locationProvider.html5Mode(true);
    
});

app.run(['$state', '$stateParams', 
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
}]);


app.constant('appSettings', {
    apiUrl: 'http://localhost:5000/'
});