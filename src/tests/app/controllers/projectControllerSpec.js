(function () {
    
    describe('projectController tests', function () {
        var scope, controller;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                //spyOn(dataService, 'getTasks').andReturn(tasks);
                controller = $controller('projectController', {
                    $scope: scope
                });
            });
        });


    });

})();
