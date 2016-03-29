
(function () {   
    'use strict';  

    describe('directive: dn-flipcard', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-flipcard/dn-flipcard.html'));
                
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.rotate = 'y';
            scope.imageFrontUrl = 'front.png';
            scope.textFront = null;
            scope.caption = "Family";
            scope.captionIconClass = "fa fa-star"
            scope.imageBackUrl = null;
            scope.textBack = "some content";
            
            template = angular.element("<dn-flipcard text-back='textBack' imageBackUrl='imageBackUrl' caption='caption' caption-icon-class='captionIconClass' rotate='rotate' image-front-url='imageFrontUrl' text-front='textFront'></dn-flipcard>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have style matched with rotate in first element', function () {
            expect(element[0].children[0].className).toBe("dn-flipcard-container dn-flipcard-container-rotate-" + scope.rotate); 
        });
        
        it('Should have style matched with rotate in children of first element', function () {
            expect(element[0].children[0].querySelector(".dn-flipcard-card").className).toContain("dn-flipcard-card-rotate-" + scope.rotate); 
        });
        
        it('Should have 2 childrens with class dn-flipcard-face for element with class dn-flipcard-card', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            expect(flipcard.children.length).toBe(2);
            angular.forEach(flipcard.children, function (elt) {
                expect(elt.className).toContain("dn-flipcard-face");    
            });
        });
        
        it('Should have one element with both class dn-flipcard-face', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card"); 
            expect(flipcard.querySelector(".dn-flipcard-front").className).toContain("dn-flipcard-face dn-flipcard-front");
        });
        
        it('Should have one element with both class dn-flipcard-back', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            expect(flipcard.querySelector(".dn-flipcard-back").className).toContain("dn-flipcard-face dn-flipcard-back");
        });    
        
        it('Should show an image in the front card when imageFrontUrl is not null', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            var frontcard = flipcard.querySelector(".dn-flipcard-front");
            expect(frontcard.querySelector("img").className).not.toContain('ng-hide');
        });
        
        it('Should not show an element p in the front card when textFront is null', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            var frontcard = flipcard.querySelector(".dn-flipcard-front");
            expect(frontcard.querySelector("p").className).toContain('ng-hide');
        });
        
        it('Should have a div with class dn-flipcard-caption', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            var frontcard = flipcard.querySelector(".dn-flipcard-front");
            expect(frontcard.querySelector("div").className).toContain('dn-flipcard-caption');
        });
        
        it('Should have caption matching scope caption', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            var frontcard = flipcard.querySelector(".dn-flipcard-front");
            expect(frontcard.querySelector("div").innerHTML).toContain(scope.caption);
        });
        
        it('Should have an i element with classes matching scope captionIconClass', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            var frontcard = flipcard.querySelector(".dn-flipcard-front");
            var divFrontcard = frontcard.querySelector("div");
            expect(divFrontcard.querySelector("i").className).toBe(scope.captionIconClass);
        });
        
        it('Should not show an image in the back card when imageBackUrl is null', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            var backcard = flipcard.querySelector(".dn-flipcard-back");
            expect(backcard.querySelector("img").className).toContain('ng-hide');
        });
        
        it('Should show an element p in the back card when textBack is not null', function () {
            var flipcard = element[0].children[0].querySelector(".dn-flipcard-card");
            var backcard = flipcard.querySelector(".dn-flipcard-back");
            expect(backcard.querySelector("p").className).not.toContain('ng-hide');
        });
        
    });

})();


