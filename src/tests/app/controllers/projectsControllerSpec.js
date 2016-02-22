(function () {
    
    describe('projectsController tests', function () {
        var scope, controller;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                scope.projects = [
                    { id: 10, title: 'cv', year: 2016  },
                    { id: 9, title: 'Deptford Park Football', year: 2015  },
                    { id: 8, title: 'Family Photo Website v2.0', year: 2015  },
                    { id: 7, title: 'Family Photo Website v1.0', year: 2014  },
                    { id: 6, title: 'Pubrush', year: 2013  },
                    { id: 5, title: 'TooManyPlaces', year: 2009  },
                    { id: 4, title: 'Pharmatoo', year: 2009  },
                    { id: 3, title: 'Makabou', year: 2008  },
                    { id: 2, title: 'Louise13', year: 2005  },
                    { id: 1, title: 'othodo', year: 2003  }
                ];
                //spyOn(dataService, 'getTasks').andReturn(tasks);
                controller = $controller('projectsController', {
                    $scope: scope
                });
            });
        });

        
    });

})();
