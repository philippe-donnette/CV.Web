(function () {
    describe("projectController tests", function() {
        var projectService, scope, $stateParams;
    
        beforeEach(function() {
            
            var mockProjectService = {};
            
            module('dnApp', function ($provide) { 
                $provide.value('projectService', mockProjectService);
             });
            
            inject(function ($q) { 
                mockProjectService.getImages = function(id) {
                        var defer = $q.defer();
                        defer.resolve([{ title: "Some title 1", id: 1 }, { title: "Some title 2", id: 2 }]);
                        return defer.promise;
                };
                mockProjectService.getProject = function(id) {
                    var defer = $q.defer();
                    defer.resolve({ name: "CV.Web", id: 1 });
                    return defer.promise;
                };
                mockProjectService.getSkills = function(id) {
                    var defer = $q.defer();
                    defer.resolve([{ name: "ASP.NET 5", id: 1 }, { name: "Angular2", id: 2 }]);
                    return defer.promise;
                };
             });
            
        });
    
        beforeEach(inject(function($controller, $rootScope, _$stateParams_, _projectService_) {
            scope = $rootScope.$new();
            projectService = _projectService_;
            $stateParams = _$stateParams_;
            
            spyOn(projectService, 'getImages').and.callThrough();
            spyOn(projectService, 'getProject').and.callThrough();
            spyOn(projectService, 'getSkills').and.callThrough();
            
            $controller('projectController', {$scope: scope, $stateParams: $stateParams, projectService: projectService });
            scope.$digest();
        }));
        
        
        it("Should have project, images and tags set", function() {
            expect(scope.project).not.toBe(null);
            expect(scope.project.images).not.toBe(null);
            expect(scope.project.tags).not.toBe(null);
            expect(scope.project).not.toBe(undefined);
            expect(scope.project.images).not.toBe(undefined);
            expect(scope.project.tags).not.toBe(undefined);
        });
        
        it("Should have breadcrumb set", function() {
            expect(scope.breadcrumb).not.toBe(null);
            expect(scope.breadcrumb).not.toBe(undefined);
        });
        
        it("Should have header set", function() {
            expect(scope.header).not.toBe(null);
            expect(scope.header).not.toBe(undefined);
        });
        
        it("Should have header title set", function() {
            expect(scope.header.title).not.toBe(null);
            expect(scope.header.title).not.toBe(undefined);
        });
        
        it("Should have header iconClass set", function() {
            expect(scope.header.iconClass).not.toBe(null);
            expect(scope.header.iconClass).not.toBe(undefined);
        });
        
        it("Should call getImages from projectService", function() {
            expect(projectService.getImages).toHaveBeenCalled();
            expect(scope.project.images).not.toBe(null);
        });
        
        it("Should call getProject from projectService", function() {
            expect(projectService.getProject).toHaveBeenCalled();
            expect(scope.project.id).toBe(1);
        });
        
        it("Should call getSkills from projectService", function() {
            expect(projectService.getSkills).toHaveBeenCalled();
            expect(scope.project.tags).not.toBe(null);
        });
        
        
    });

})();
