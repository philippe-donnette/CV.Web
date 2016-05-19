(function () {
    
    describe('headerController tests', function () {
        var scope, projectService, personService, controller;

        beforeEach(function () {
            
            var mockProjectService = {};
            var mockPersonService = {};
            
            module('dnApp', function ($provide) {
                $provide.value('projectService', mockProjectService);
                $provide.value('personService', mockPersonService);
            });
            
            inject(function ($q) {
                mockPersonService.getPerson = function() {
                    var defer = $q.defer();
                    defer.resolve({ lastname: "Donnette", firstname: "Philippe", id: 1 });
                    return defer.promise;
                };
                mockProjectService.getProjects = function () {
                    var defer = $q.defer();
                    defer.resolve([{ name: "CV.Web", id: 1 }, { name: "Deptford Park Football", id: 2 }]);
                    return defer.promise;    
                };
            });
        });
        
        beforeEach(function () {
                inject(function ($controller, $rootScope, _projectService_, _personService_) {
                    scope = $rootScope.$new();
                    projectService = _projectService_;
                    personService = _personService_;
                    
                    spyOn(projectService, 'getProjects').and.callThrough();
                    spyOn(personService, 'getPerson').and.callThrough();
                    
                    controller = $controller('headerController', { $scope: scope, projectService: projectService, personService: personService });
                    scope.$digest();
                });
            }
        );
            
        it('Should have projects set', function () {
            expect(scope.projects).not.toBe(null);
            expect(scope.projects).not.toBe(undefined);
        });
        
        it('Should call getProjects', function () {
            expect(projectService.getProjects).toHaveBeenCalled();
        });
        
        it('Should have person set', function () {
            expect(scope.person).not.toBe(null);
            expect(scope.person).not.toBe(undefined);
        });
        
        it('Should call getPerson', function () {
            expect(personService.getPerson).toHaveBeenCalled();
        });         
           
   });

})();
