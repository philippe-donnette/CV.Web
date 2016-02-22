
(function () {   
    'use strict';  

    describe('directive: dn-project', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-project/dn-project.html'));
        
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.project = { 
                title: "Deptford Park Football",
                id: 8
            };
            
            template = angular.element("<dn-project project='project'></dn-project>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        
    });

})();


