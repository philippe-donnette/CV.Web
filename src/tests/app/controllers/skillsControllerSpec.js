(function () {

    describe("skillsController tests", function() {
        var $controller, skillsService, createController, scope;
    
        beforeEach(function() {
            module('dnApp');
            
            module(function($provide) {
            
            $provide.value('skillsService', {
                listStores: function() {
                return { 
                    then: function(callback) {return callback([{ some: "thing", hoursInfo: {isOpen: true}}]);}
                };
                },
                getSkills: function() {
                    return { 
                        then: function(response) {
                            return response([
                                { name: "asp.net", weight: 1 },
                                { name: "asp", weight: 2 },
                                { name: "php", weight: 3 },
                                { name: "js", weight: 4 }]);
                        }
                    };
                }
            });
            
            return null;
            });
        });
    
        beforeEach(function() {
        
            inject(function($controller, $rootScope, _skillsService_) {
            scope = $rootScope.$new();
            skillsService = _skillsService_;
            createController = function(params) {
                return $controller("skillsController", {
                $scope: scope,
                $stateParams: params || {}
                });
            };
            });
        });
    
        it("should call getSkills from skillService", function() {
            spyOn(skillsService, 'getSkills').and.callThrough();
            createController();
            expect(skillsService.getSkills).toHaveBeenCalled();
        });
    });

})();
