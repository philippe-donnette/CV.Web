(function () {
    
    describe('skillsController tests', function () {
        var scope, controller, person;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                
                controller = $controller('skillsController', {
                    $scope: scope
                });
            });
        });

        it('should match someText', function () {
            
        });
        
    });

})();
