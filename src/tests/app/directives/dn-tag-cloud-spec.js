
(function () {   
    'use strict';  

    describe('directive: dn-tag-cloud', function () {
        var element, scope, template, tagSelected;

        //beforeEach(module('dnApp'));
        beforeEach(module('dnApp', function ($controllerProvider) {
            $controllerProvider.register('dnTagCloudController', function MockTestCtrl($scope) {
                $scope.openTag = function (tag) { 
                    tagSelected = tag;    
                };
            });
        }));
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        beforeEach(module('app/directives/dn-tag-cloud/dn-tag-cloud.html'));
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.tags = [
                { label: "ASP.NET MVC", weight: "10", iconClass: "devicons devicons-apache" },
                { label: "ASP.NET WebForm", weight: "5", iconClass: null },
                { label: "WCF", weight: "3" },
                { label: "SQL SERVER", weight: "9" },
                { label: "PHP", weight: "1" },
                { label: "CSS", weight: "8" }
            ];
            scope.container = true;
            template = angular.element("<dn-tag-cloud tags='tags' container='container'></dn-tag-cloud>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('tagSelected should be undefined', function () {
            expect(tagSelected).toBeUndefined();    
        });
        
        it('clicks on first tag should trigger openTag from controller', function() {
            element[0].children[0].querySelector('.dn-tag').click();
            expect(tagSelected.label).toBe(scope.tags[0].label);
        });

        it('Number of tags should match number of elements span with class dn-tag', function () {
            expect(element[0].getElementsByClassName("dn-tag").length).toBe(scope.tags.length);
        });
        
        it('Weight should match with class', function () {
            var tagElements = element[0].getElementsByClassName("dn-tag");
            angular.forEach(tagElements, function (tagElement) {
               var weightCss = tagElement.children[1].className;
               var label = tagElement.children[1].innerHTML;
               angular.forEach(scope.tags, function (tag) {
                   if(tag.label == label) {
                       expect(weightCss).toContain("dn-tag-" + tag.weight);
                   }
               });
            });
        });
        
        it('Should have i tag with matching classes when iconClass is not null or empty', function () { 
            var tagElements = element[0].getElementsByClassName("dn-tag");
            angular.forEach(tagElements, function (tagElement) {
               var label = tagElement.children[1].innerHTML;
               angular.forEach(scope.tags, function (tag) {
                   if(tag.label == label) {
                       if(tag.iconClass == null || tag.iconClass == undefined || tag.iconClass == '') { 
                           expect(tagElement.children[0].className).toBe("dn-tag-icon-" + tag.weight);
                        }
                        else {
                            expect(tagElement.children[0].className).toContain(tag.iconClass);
                            expect(tagElement.children[0].className).toContain("dn-tag-icon-" + tag.weight);
                        }   
                   }
               });
            });
        });

        it('should not have well and dn-tag-well classes', function () {
            scope.container = false;
            scope.$digest();
            expect(element[0].children[0].className).not.toContain("well");
            expect(element[0].children[0].className).not.toContain("dn-tag-well");
        });
        
        it('should have well and dn-tag-well classes', function () {
            scope.container = true;
            scope.$digest();
            expect(element[0].children[0].className).toContain("well dn-tag-well");
        });
        

    });

})();


