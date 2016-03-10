
(function () {   
    'use strict';  

    describe('directive: dn-versions', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-versions/dn-versions.html'));
        
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.versions = ["2015 Community", "Code", "2013 Professional", "2012 Professional", "2010 Professional", "2008 Professional"];
            
            template = angular.element("<dn-versions versions='versions'></dn-versions>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('scope versions should match number of li elements', function () {
            expect(element[0].getElementsByTagName("li").length).toBe(scope.versions.length);
        });
    });

})();


