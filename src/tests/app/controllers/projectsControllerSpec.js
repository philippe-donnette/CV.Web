(function () {
    describe("projectsController tests", function() {
        var controller, mockProjectService, scope;
    
        beforeEach(function() {
            
            var mockProjectService = {};
            
            module('dnApp', function($provide) {
                $provide.value('projectService', mockProjectService);
            });
            
            inject(function ($q) {
                mockProjectService.getProjects = function() {
                    var defer = $q.defer();
                    defer.resolve([
                        { name: "CV.Web", id: 1 },
                        { name: "Donola.CV", id: 2 }
                    ]);
                    return defer.promise;
                };
            });
        });    
            
        beforeEach(function () {
            inject(function ($controller, $rootScope, _projectService_) {
                scope = $rootScope.$new();
                projectService = _projectService_;
                
                spyOn(projectService, 'getProjects').and.callThrough();
                
                controller = $controller('projectsController', { $scope: scope, projectService: projectService });
                scope.$digest();
            });
        });
    
        it('Should have projects set', function () {
            expect(scope.projects).not.toBe(null);
            expect(scope.projects).not.toBe(undefined);
        });
    
        it("Should call getProjects from projectService", function() {
            expect(projectService.getProjects).toHaveBeenCalled();
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
        
    });

})();