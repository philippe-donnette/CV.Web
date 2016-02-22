(function () {
    
    describe('aboutController tests', function () {
        var scope, controller, person;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                someText = "About - Great";
                controller = $controller('aboutController', {
                    $scope: scope
                });
            });
        });

        it('should match someText', function () {
            expect(scope.someText).toBe(someText);
        });
        
    });

})();
