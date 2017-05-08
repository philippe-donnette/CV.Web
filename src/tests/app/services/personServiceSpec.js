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
            $httpBackend.expectGET('http://localhost:5057/api/person').respond(data);
            personService.getPerson().then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        }); 
        
        it('should have a getCards function', function () { 
            expect(angular.isFunction(personService.getCards)).toBe(true);
        });
        
        it("Testing getPerson", function() {
            var data = [ 
                { rotate: "x", imageFrontUrl: "card-contact.jpg", textFront: null, caption: "Family", captionIconClass: "fa fa-group", textBack: "Happy father of two, one boy Matti and one girl Leila", imageBackUrl: null },
                { rotate: "y", imageFrontUrl: "card-contact.jpg", textFront: null, caption: "Location", captionIconClass: "fa fa-map-marker", textBack: "London SE8<br />United Kingdom", imageBackUrl: null }
            ];
            $httpBackend.expectGET('http://localhost:5057/api/person/card/all').respond(data);
            personService.getCards().then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        });
        
    });
            
})();
