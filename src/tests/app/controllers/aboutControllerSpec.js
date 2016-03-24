(function () {
    describe("aboutController tests", function() {
        var personService, scope;
    
        beforeEach(function() {
            
            var mockPersonService = {};
            
            module('dnApp', function ($provide) { 
                $provide.value('personService', mockPersonService);
             });
            
            inject(function ($q) { 
                mockPersonService.getPerson = function() {
                    var defer = $q.defer();
                    defer.resolve({ lastname: "Donnette", firstname: "Philippe", id: 1 });
                    return defer.promise;
                };
             });
            
        });
    
        beforeEach(inject(function($controller, $rootScope, _personService_) {
            scope = $rootScope.$new();
            personService = _personService_;
            
            spyOn(personService, 'getPerson').and.callThrough();
            
            $controller('aboutController', {$scope: scope, personService: personService });
            scope.$digest();
        }));
        
        
        it("Should have person set", function() {
            expect(scope.person).not.toBe(null);
        });
        
        it("Should call getPerson from personService", function() {
            expect(personService.getPerson).toHaveBeenCalled();
            expect(scope.person.id).toBe(1);
        });
        
    });

})();