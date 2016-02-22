(function () {
    
    describe('footerController tests', function () {
        var scope, controller, person;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                footerText = "THis is the bottom";
                controller = $controller('footerController', {
                    $scope: scope
                });
            });
        });

        it('should match footerText', function () {
            expect(scope.footerText).toBe(footerText);
        });
        

    });

})();
