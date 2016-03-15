(function () {
    describe("projectController tests", function() {
        var $controller, projectService, createController, scope;
    
        beforeEach(function() {
            module('dnApp');
            
            module(function($provide) {
            
            $provide.value('projectService', {
                getImages: function(id) {
                    return { 
                        then: function(response) {
                            return response([
                                { title: "Some title 1", id: 1 },
                                { title: "Some title 2", id: 2 }]);
                        }
                    };
                },
                getProject: function(id) {
                    return { 
                        then: function(response) {
                            return response({ name: "CV.Web", id: 1 });
                        }
                    };
                },
                getSkills: function(id) {
                    return { 
                        then: function(response) {
                            return response([
                                { name: "ASP.NET 5", id: 1 },
                                { name: "Angular2", id: 2 }]);
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
                    return $controller("projectController", {
                        $scope: scope,
                        $stateParams: params || {}
                    });
                };
            });
        }); 
   
        it("Should call getImages from projectService", function() {
            spyOn(projectService, 'getImages').and.callThrough();
            createController();
            expect(projectService.getImages).toHaveBeenCalled();
        });
        
        it("Should call getProject from projectService", function() {
            spyOn(projectService, 'getProject').and.callThrough();
            createController();
            expect(projectService.getProject).toHaveBeenCalled();
        });
        
        it("Should call getSkills from projectService", function() {
            spyOn(projectService, 'getSkills').and.callThrough();
            createController();
            expect(projectService.getSkills).toHaveBeenCalled();
        });
        
        
    });

})();
