
(function () {   
    'use strict';  

    describe('directive: dn-experience', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-experience/dn-experience.html', function($provide){
            $provide.factory('dnTagCloudDirective', function(){ return {}; });
        }));
        
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.jobs = [
                { 
                    company: "University of London",
                    role: "Senior Developer", 
                    description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read",
                    tags: [
                        { label: "ASP.NET MVC", weight: "10" },
                        { label: "ASP.NET WebForm", weight: "5" },
                        { label: "WCF", weight: "3" },
                        { label: "SQL SERVER", weight: "9" },
                        { label: "PHP", weight: "1" },
                        { label: "CSS", weight: "8" }
                    ] 
                },
                { 
                    company: "DOCDATA Limited",
                    role: "Senior Developer", 
                    description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read",
                    tags: [
                        { label: "ASP.NET MVC", weight: "10" },
                        { label: "ASP.NET WebForm", weight: "5" },
                        { label: "WCF", weight: "3" },
                        { label: "SQL SERVER", weight: "9" },
                        { label: "PHP", weight: "1" },
                        { label: "CSS", weight: "8" }
                    ] 
                }
            ];

            
            template = angular.element("<dn-experience jobs='jobs'></dn-experience>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have an element div with class dn-experience', function () {
            expect(element[0].children[0].className).toContain("dn-experience");
        });

        it('First element of jobs should have class dn-experience-odd', function () {
            expect(element[0].children[0].className).toContain("dn-experience-odd");
        });
        
        it('Second element of jobs should have class dn-experience-even', function () {
            expect(element[0].children[1].className).toContain("dn-experience-even");
        });

    });

})();


