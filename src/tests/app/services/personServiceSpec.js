(function () {
    describe("personService tests", function() {
        var personService, $httpBackend;
    
        beforeEach(function() {
            module('dnApp'); 
            module(function($provide) {            
            });
        });
        
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        
        beforeEach(function() {
            inject(function(_$httpBackend_, _personService_) {
                $httpBackend = _$httpBackend_;
                personService = _personService_;
            });
        });
    
        
        it('should have a getPerson function', function () { 
            expect(angular.isFunction(personService.getPerson)).toBe(true);
        });
        
        it("Testing getPerson", function() {
            var data = { id: 1, firstname: "Philippe", lastname: "Donnette" };
            $httpBackend.expectGET('http://localhost:5000/api/person').respond(data);
            personService.getPerson().then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        }); 
        
    });
            
})();
