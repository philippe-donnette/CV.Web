
(function () {   
    'use strict';  

    describe('directive: dn-projects', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-projects/dn-projects.html'));
        
        beforeEach(inject(function ($rootScope, $compile) {
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
            
            template = angular.element("<dn-projects projects='projects'></dn-projects>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have an element ul with class dn-projects', function () {
            expect(element[0].children[0].className).toContain("dn-projects");
        });

        it('ul with class dn-projects should have number of li matching with scope projects length', function () {
            expect(element[0].getElementsByClassName("dn-projects")[0].children.length).toBe(scope.projects.length);
        });

    });

})();


