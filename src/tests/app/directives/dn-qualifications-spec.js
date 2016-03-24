
(function () {   
    'use strict';  

    describe('directive: dn-qualifications', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-qualifications/dn-qualifications.html'));
                
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.studies = [
                { id: 1, schoolName: "H.E.I.G", imageUrl: "heig.png", websiteUrl: null, degreeFile: "heig.pdf" },
                { id: 2, schoolName: "Lycee Martin Luther King", websiteUrl: "http://www.google.co.uk" }
            ];

            
            template = angular.element("<dn-qualifications studies='studies'></dn-qualifications>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have an element div with class dn-qualifications', function () {
            expect(element[0].children[0].className).toContain("dn-qualifications"); 
        });
        
        it('Should have matching number of div elements with class thumbnail', function () {
            expect(element[0].children[0].getElementsByClassName("thumbnail").length).toBe(scope.studies.length); 
        });

        it('Should only display image if not null or undefined', function () {
            var i = 0;
            var thumbs = element[0].children[0].getElementsByClassName("thumbnail");
            angular.forEach(scope.studies, function (study) {
                if (study.imageUrl == undefined || study.imageUrl == null)
                    expect(thumbs[i].querySelector("img").className).toBe('ng-hide');
                else
                    expect(thumbs[i].querySelector("img").className).not.toBe('ng-hide');
                i++;
            });
        });
        
        it('Should only display website button if websiteUrl is not null or undefined', function () {
            var i = 0;
            var thumbs = element[0].children[0].getElementsByClassName("thumbnail");
            angular.forEach(scope.studies, function (study) {
                if (study.websiteUrl == undefined || study.websiteUrl == null)
                    expect(thumbs[i].querySelector(".dn-btn-website").className).toContain('ng-hide');
                else
                    expect(thumbs[i].querySelector(".dn-btn-website").className).not.toContain('ng-hide');
                i++;
            });
        });
        
        it('Should only display certificate button if degreeFile is not null or undefined', function () {
            var i = 0;
            var thumbs = element[0].children[0].getElementsByClassName("thumbnail");
            angular.forEach(scope.studies, function (study) {
                if (study.degreeFile == undefined || study.degreeFile == null)
                    expect(thumbs[i].querySelector(".dn-btn-degree").className).toContain('ng-hide');
                else
                    expect(thumbs[i].querySelector(".dn-btn-degree").className).not.toContain('ng-hide');
                i++;
            });
        });

    });

})();


