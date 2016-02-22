
(function () {   
    'use strict';  

    describe('directive: dn-rating', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-rating/dn-rating.html'));
        
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.rating = 8;
            scope.max = 10;
            
            template = angular.element("<dn-rating max='max' rating='rating'></dn-rating>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('scope rating should match number of elements with class fa-star', function () {
            expect(element[0].getElementsByClassName("fa-star").length).toBe(scope.rating);
        });
        
        it('number of elements with class fa-star-o should match difference between scope max and ratings', function () {
            expect(element[0].getElementsByClassName("fa-star-o").length).toBe(scope.max - scope.rating);
        });

    });

})();


