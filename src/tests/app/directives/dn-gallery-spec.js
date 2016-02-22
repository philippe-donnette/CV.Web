
(function () {   
    'use strict';  

    describe('directive: dn-gallery', function () {
        var element, scope, template, controller, imageSelected;

        //beforeEach(module('dnApp'));
        beforeEach(module('dnApp', function ($controllerProvider) {
            $controllerProvider.register('dnGalleryController', function MockTestCtrl($scope) {
                $scope.openImage = function (image) { 
                    imageSelected = image;
                    return image.title;    
                };
            });
        }));
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        beforeEach(module('app/directives/dn-gallery/dn-gallery.html'));
        
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.images = [
                { id: 1, url: "images/projects/gallery/img1.png", title: "Image 1" },
                { id: 2, url: "images/projects/gallery/img2.png", title: "Iron Man" },
                { id: 3, url: "images/projects/gallery/thor.jpg", title: "Thor" }
            ];
            
            template = angular.element("<dn-gallery images='images'></dn-gallery>");

            element = $compile(template)(scope);
            scope.$digest();
            
            controller = element.controller;
        }));

        it('imageSelected should be undefined', function() {
            expect(imageSelected).toBeUndefined();
        });

        it('clicks on first image should trigger openImage from controller', function() {
            element[0].children[0].children[0].querySelector('.dn-lk-image').click();
            expect(imageSelected.url).toBe(scope.images[0].url);
        });
        
    });

})();


