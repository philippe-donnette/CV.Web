(function () {
    describe("trainingService tests", function() {
        var trainingService, $httpBackend;
    
        beforeEach(function() {
            module('dnApp'); 
            
            module(function($provide) {
            
            });
        });
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        beforeEach(function() {
            
                inject(function(_$httpBackend_, _trainingService_) {
                    $httpBackend = _$httpBackend_;
                    trainingService = _trainingService_;
                });
        });
    
        it('should have a getTrainings function', function () { 
            expect(angular.isFunction(trainingService.getTrainings)).toBe(true);
        });
        
        it("Testing getTrainings", function() {
            var data = [
                    { id: 1, provider: "scrum.org" },
                    { id: 2, provider: "janet" }
                ];
            $httpBackend.expectGET('http://localhost:5057/api/training/all').respond(data);
            trainingService.getTrainings().then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        });
    
    });
            
})();
