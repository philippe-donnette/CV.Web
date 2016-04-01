
(function () {   
    'use strict';  

    describe('directive: dn-experience', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-experience/dn-experience-carousel.html'));               
        beforeEach(module('app/directives/dn-experience/dn-experience-slide.html'));
        beforeEach(module('app/directives/dn-experience/dn-experience.html', function($provide){
            $provide.factory('dnTagCloudDirective', function(){ return {}; });
        }));
        
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.jobs = [
                { 
                    id: 1,
                    company: "University of London",
                    role: "Senior Developer", 
                    description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read",
                    tags: [
                        { name: "ASP.NET MVC", weight: "10" },
                        { name: "ASP.NET WebForm", weight: "5" },
                        { name: "WCF", weight: "3" },
                        { name: "SQL SERVER", weight: "9" },
                        { name: "PHP", weight: "1" },
                        { name: "CSS", weight: "8" }
                    ] 
                },
                { 
                    id:2, 
                    company: "DOCDATA Limited",
                    role: "Senior Developer", 
                    description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read",
                    tags: [
                        { name: "ASP.NET MVC", weight: "10" },
                        { name: "ASP.NET WebForm", weight: "5" },
                        { name: "WCF", weight: "3" },
                        { name: "SQL SERVER", weight: "9" },
                        { name: "PHP", weight: "1" },
                        { name: "CSS", weight: "8" }
                    ] 
                }
            ];

            
            template = angular.element("<dn-experience jobs='jobs'></dn-experience>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have an element div with class carousel', function () {
            expect(element[0].children[0].className).toContain("carousel");
        });

        it('Should match number of slides with scope jobs length', function () {
            expect(element[0].children[0].querySelectorAll("[template-url='app/directives/dn-experience/dn-experience-slide.html']").length).toBe(scope.jobs.length);
        });
        
        it('Should have a matching template url', function () {
            expect(element[0].querySelectorAll("[template-url='app/directives/dn-experience/dn-experience-carousel.html']").length).toBe(1);
        });

    });

})();


