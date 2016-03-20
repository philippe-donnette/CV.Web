(function () {
    
    describe('headerController tests', function () {
        var scope, projectService, controller;

        beforeEach(function () {
            
            var mockProjectService = {};
            
            module('dnApp', function ($provide) {
                $provide.value('projectService', mockProjectService);
            });
            
            inject(function ($q) {
                mockProjectService.getProjects = function () {
                    var defer = $q.defer();
                    defer.resolve({ status: 200, data: [{ name: "CV.Web", id: 1 }, { name: "Deptford Park Football", id: 2 }] });
                    return defer.promise;    
                };
            });
        });
        
        beforeEach(function () {
                inject(function ($controller, $rootScope, _projectService_) {
                    scope = $rootScope.$new();
                    projectService = _projectService_;
                    
                    controller = $controller('headerController', { $scope: scope, projectService: projectService });
                    scope.$digest();
                });
            }
        );
            
        it('Should have projects set', function () {
            expect(scope.projects).not.toBe(null);
        });
        
        it('Should call getProjects', function () {
            spyOn(projectService, 'getProjects').and.callThrough();
            scope.init();
            expect(projectService.getProjects).toHaveBeenCalled();
        });         
           
   });

})();
