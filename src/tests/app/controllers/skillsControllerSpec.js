(function () {
    describe("skillsController tests", function() {
        var skillsService, scope;
    
        beforeEach(function() {
            
            var mockSkillsService = {};
            
            module('dnApp', function ($provide) { 
                $provide.value('skillsService', mockSkillsService);
             });
            
            inject(function ($q) {
                mockSkillsService.getSkills = function() {
                    var defer = $q.defer();
                    defer.resolve([
                                { name: "asp.net", weight: 1 },
                                { name: "asp", weight: 2 },
                                { name: "php", weight: 3 },
                                { name: "js", weight: 4 }
                            ]);
                    return defer.promise;  
                }; 
             });
            
        });
    
        beforeEach(inject(function($controller, $rootScope, _skillsService_) {
            scope = $rootScope.$new();
            skillsService = _skillsService_;
            
            spyOn(skillsService, 'getSkills').and.callThrough();
            
            $controller('skillsController', {$scope: scope, skillsService: skillsService });
            scope.$digest();
        }));
        
        
        it("Should have tags set", function() {
            expect(scope.tags).not.toBe(null);
            expect(scope.tags).not.toBe(undefined);
        });
        
        it("Should call getSkills from skillsService", function() {
            expect(skillsService.getSkills).toHaveBeenCalled();
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