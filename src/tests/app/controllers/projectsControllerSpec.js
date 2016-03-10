(function () {
    describe("projectsController tests", function() {
        var $controller, projectService, createController, scope;
    
        beforeEach(function() {
            module('dnApp');
            
            module(function($provide) {
            
            $provide.value('projectService', {
                getProjects: function() {
                    return { 
                        then: function(response) {
                            return response([
                                { name: "CV.Web", id: 1 },
                                { name: "Donola.CV", id: 2 }]);
                        }
                    };
                }
            });
            
            return null;
            });
        });
    
        beforeEach(function() {
        
            inject(function($controller, $rootScope, _projectService_) {
                scope = $rootScope.$new();
                projectService = _projectService_;
                createController = function(params) {
                    return $controller("projectsController", {
                        $scope: scope,
                        $stateParams: params || {}
                    });
                };
            });
        }); 
    
        it("Should call getProjects from projectService", function() {
            spyOn(projectService, 'getProjects').and.callThrough();
            createController();
            expect(projectService.getProjects).toHaveBeenCalled();
        });
    });

})();
