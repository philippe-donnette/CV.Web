(function () {
    describe("qualificationsController tests", function() {
        var $controller, qualificationService, createController, $scope, $q, deferred;
    
        beforeEach(function() {
            module('dnApp');
            
            module(function($provide) {
                
                $provide.value('qualificationService', {
                    getQualifications: function() {
                        return { 
                            then: function(response) {
                                return response([
                                        { id: 1, schoolName: "H.E.I.G" },
                                        { id: 2, schoolName: "Lycee Martin Luther King" }
                                    ]);
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
        
            inject(function($controller, _$rootScope_, _$q_, _qualificationService_) {
                $q = _$q_;
                deferred = _$q_.defer();
                $scope = _$rootScope_.$new();
                qualificationService = _qualificationService_;
                
                createController = function(params) {
                    return $controller("qualificationsController", {
                        $scope: $scope,
                        $stateParams: params || {},
                        qualificationService: _qualificationService_
                    });
                };
                
            });
        });     
    
        it("Should call getQualifications from qualificationService", function() {
            
            spyOn(qualificationService, 'getQualifications').and.callThrough();
            createController();
            expect(qualificationService.getQualifications).toHaveBeenCalled();
        });
    });

})();


