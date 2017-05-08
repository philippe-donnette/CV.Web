(function () {
    describe("qualificationService tests", function() {
        var qualificationService, $httpBackend;
    
        beforeEach(function() {
            module('dnApp'); 
            
            module(function($provide) {
            
            });
        });
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        beforeEach(function() {
            
                inject(function(_$httpBackend_, _qualificationService_) {
                    $httpBackend = _$httpBackend_;
                    qualificationService = _qualificationService_;
                });
        });
    
        it('should have a getQualifications function', function () { 
            expect(angular.isFunction(qualificationService.getQualifications)).toBe(true);
        });
        
        it("Testing getQualifications", function() {
            var data = [
                    { id: 1, schoolName: "H.E.I.G" },
                    { id: 2, schoolName: "Lycee Martin Luther King" }
                ];
            $httpBackend.expectGET('http://localhost:5057/api/qualification/all').respond(data);
            qualificationService.getQualifications().then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        });
    
    });
            
})();
