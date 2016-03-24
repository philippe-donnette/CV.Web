(function () {
    describe("experiencesController tests", function() {
        var controller, mockExperienceService, scope;
    
        beforeEach(function() {
            
            var mockExperienceService = {};
            
            module('dnApp', function($provide) {
                $provide.value('experienceService', mockExperienceService);
            });
            
            inject(function ($q) {
                mockExperienceService.getExperiences = function() {
                    var defer = $q.defer();
                    defer.resolve([
                        { 
                            companyName: "University of London",
                            roleTitle: "Senior Developer", 
                            description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read" 
                        },
                        { 
                            companyName: "DOCDATA Limited",
                            roleTitle: "Senior Developer", 
                            description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read" 
                        }
                    ]);
                    return defer.promise;
                };
            });
        });    
            
        beforeEach(function () {
            inject(function ($controller, $rootScope, _experienceService_) {
                scope = $rootScope.$new();
                experienceService = _experienceService_;
                
                spyOn(experienceService, 'getExperiences').and.callThrough();
                
                controller = $controller('experiencesController', { $scope: scope, experienceService: experienceService });
                scope.$digest();
            });
        });
    
        it("Should call getExperiences from experienceService", function() {
            expect(experienceService.getExperiences).toHaveBeenCalled();
        });
        
    });

})();


