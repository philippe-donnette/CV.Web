
(function () {   
    'use strict';  

    describe('directive: dn-page-header', function () {
        var element, scope, template;

        beforeEach(module('dnApp'));
        beforeEach(module('app/directives/dn-page-header/dn-page-header.html'));
                
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            scope.title = 'Awesome project';
            scope.iconClass = 'fa fa-suitcase';
            scope.breadcrumb = [
                { title: 'Home', url: 'root.home', iconClass: 'fa fa-home' },
                { title: 'Projects', url: 'root.projects', iconClass: 'fa fa-suitcase' },
                { title: 'Awesome project', url: null, iconClass: 'fa fa-suitcase' }
            ];
            
            template = angular.element("<dn-page-header title='title' icon-class='iconClass' breadcrumb='breadcrumb'></dn-page-header>");

            element = $compile(template)(scope);
            scope.$digest();
        }));

        it('Should have an h1 element with className dn-h1', function () {
            expect(element[0].querySelector('h1').className).toContain("dn-h1"); 
        });
        
        it('Should have an i element with className matching scope iconClass within h1', function () {
            var h1Elt = element[0].querySelector('h1');
            var iElt = h1Elt.querySelector("i"); 
            expect(iElt.className).toBe(scope.iconClass); 
        });
        
        it('Should have an h1 element containing title matching scope title', function () {
            var h1Elt = element[0].querySelector('h1'); 
            expect(h1Elt.innerHTML).toContain(scope.title); 
        });
        
        it('Should have an ol element with classes breadcrumb and dn-breadcrumb', function () {
           var olElt = element[0].querySelector("ol");
           expect(olElt.className).toContain("breadcrumb dn-breadcrumb"); 
        });
        
        it('Should have ol element containing number of li matching with number of items in scope breadcrumb', function () {
            var olElt = element[0].querySelector("ol");
            var liElts = olElt.querySelectorAll("li");
            expect(liElts.length).toBe(scope.breadcrumb.length);
        });
        
        it('Should have li with class active for each breadcrumb items with url not null or undefined', function () {
            var olElt = element[0].querySelector("ol");
            var liElts = olElt.querySelectorAll("li");
            var i = 0;
            angular.forEach(liElts, function (elt) {
                if(scope.breadcrumb[i].url == null || scope.breadcrumb[i].url == undefined) {
                    expect(elt.className).toContain("active");   
                }
                else {
                    expect(elt.className).not.toContain("active");   
                }
                i++;    
            });
        });
        
    });

})();


