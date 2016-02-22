(function () {
    
    describe('experienceController tests', function () {
        var scope, controller;

        beforeEach(function () {
            module('dnApp');
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                scope.jobs = [
                    { 
                        company: "University of London",
                        role: "Senior Developer", 
                        description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read" 
                    },
                    { 
                        company: "DOCDATA Limited",
                        role: "Senior Developer", 
                        description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read" 
                    }
                ];
                controller = $controller('experienceController', {
                    $scope: scope
                });
            });
        });

        //it('Should have an element tr with class dn-experience', function () {
        //    expect(scope.someText).toBe(someText);
        //});

        
    });

})();
