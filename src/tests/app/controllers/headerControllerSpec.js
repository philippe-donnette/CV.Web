(function () {
    
    describe('headerController tests', function () {
        var scope, controller;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                //spyOn(dataService, 'getTasks').andReturn(tasks);
                controller = $controller('headerController', {
                    $scope: scope
                });
            });
        });


    });

})();
