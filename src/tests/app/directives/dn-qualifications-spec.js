
(function () {   
    'use strict';  

    describe('directive: dn-qualifications', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-qualifications/dn-qualifications.html'));
                
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.studies = [
                { Id: 1, schoolName: "H.E.I.G" },
                { Id: 2, schoolName: "Lycee Martin Luther King" }
            ];

            
            template = angular.element("<dn-qualifications studies='studies'></dn-qualifications>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have an element div with class dn-qualifications', function () {
            expect(element[0].children[0].className).toContain("dn-qualifications"); 
        });

    });

})();


