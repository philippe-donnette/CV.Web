(function () {
    describe("experiencesController tests", function() {
        var $controller, experienceService, createController, $scope, $q, deferred;
    
        beforeEach(function() {
            module('dnApp');
            
            module(function($provide) {
                
                $provide.value('experienceService', {
                    getExperiences: function() {
                        return { 
                            then: function(response) {
                                return response([
                                    { 
                                        companyName: "University of London",
                                        roleTitle: "Senior Developer", 
                                        description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read" 
                                    },
                                    { 
                                        companyName: "DOCDATA Limited",
                                        roleTitle: "Senior Developer", 
                                        description: "Some description about the role goes here, do not make it too long as this is not something people might be very interested to read" 
                                    }]);
                            }
                        };
                    }
                });
                
            
                return null;
            });
        });
    
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
    
        beforeEach(function() {
        
            inject(function($controller, _$rootScope_, _$q_, _experienceService_) {
                $q = _$q_;
                deferred = _$q_.defer();
                $scope = _$rootScope_.$new();
                experienceService = _experienceService_;
                
                createController = function(params) {
                    return $controller("experiencesController", {
                        $scope: $scope,
                        $stateParams: params || {},
                        experienceService: _experienceService_
                    });
                };
                
            });
        });     
    
        it("Should call getExperiences from experienceService", function() {
            
            spyOn(experienceService, 'getExperiences').and.callThrough();
            createController();
            expect(experienceService.getExperiences).toHaveBeenCalled();
        });
    });

})();


