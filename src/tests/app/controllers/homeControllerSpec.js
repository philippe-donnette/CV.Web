(function () {
    
    describe('homeController tests', function () {
        var scope, controller, person;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                someText = "Awesome";
                otherText = "This is terribly fantastic";
                //spyOn(dataService, 'getTasks').andReturn(tasks);
                controller = $controller('homeController', {
                    $scope: scope
                });
            });
        });

        it('should match someText', function () {
            expect(scope.someText).toBe(someText);
        });
        
        it('should match otherText', function () {
            expect(scope.otherText).toBe(otherText);
        });

    });

})();
