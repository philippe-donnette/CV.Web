
(function () {   
    'use strict';  

    describe('directive: dn-trainings', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-trainings/dn-trainings.html'));
                
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.items = [
                { id: 1, provider: "scrum.org", imageUrl: "scrum.png", websiteUrl: null, certificateFile: "scrum.pdf" },
                { id: 2, provider: "Janet", websiteUrl: "http://www.google.co.uk", imageUrl: null }
            ];

            
            template = angular.element("<dn-trainings items='items'></dn-trainings>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have an element div with class dn-trainings', function () {
            expect(element[0].children[0].className).toContain("dn-trainings"); 
        });
        
        it('Should have matching number of div elements with class panel', function () {
            expect(element[0].children[0].getElementsByClassName("panel").length).toBe(scope.items.length); 
        });

        it('Should only display image if not null or undefined', function () { 
            var i = 0;
            var panels = element[0].children[0].getElementsByClassName("panel");
            angular.forEach(scope.items, function (item) {
                if (item.imageUrl == undefined || item.imageUrl == null)
                    expect(panels[i].querySelector("img").className).toContain('ng-hide');
                else
                    expect(panels[i].querySelector("img").className).not.toContain('ng-hide');
                i++;
            });
        });
        
        it('Should only display website button if websiteUrl is not null or undefined', function () {
            var i = 0;
            var panels = element[0].children[0].getElementsByClassName("panel");
            angular.forEach(scope.items, function (item) {
                if (item.websiteUrl == undefined || item.websiteUrl == null)
                    expect(panels[i].querySelector(".dn-btn-website").className).toContain('ng-hide');
                else
                    expect(panels[i].querySelector(".dn-btn-website").className).not.toContain('ng-hide');
                i++;
            });
        });
        
        it('Should only display certificate button if certificateFile is not null or undefined', function () {
            var i = 0;
            var panels = element[0].children[0].getElementsByClassName("panel");
            angular.forEach(scope.items, function (item) {
                if (item.certificateFile == undefined || item.certificateFile == null)
                    expect(panels[i].querySelector(".dn-btn-certificate").className).toContain('ng-hide');
                else
                    expect(panels[i].querySelector(".dn-btn-certificate").className).not.toContain('ng-hide');
                i++;
            });
        });

    });

})();


