(function () {
    describe("skillsService tests", function() {
        var skillsService, $httpBackend;
    
        beforeEach(function() {
            module('dnApp'); 
            
            module(function($provide) {
            
            });
        });
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        beforeEach(function() {
            inject(function(_$httpBackend_, _skillsService_) {
                $httpBackend = _$httpBackend_;
                skillsService = _skillsService_;
            });
        });
    
        it('should have a getSkills function', function () { 
            expect(angular.isFunction(skillsService.getSkills)).toBe(true);
        });
    
        it("Testing getSkills", function() {
            var data = [
                    { Id: 1, Name: "ASP.NET 5" },
                    { Id: 2, Name: "Angular 2" }
                ];
            $httpBackend.expectGET('http://localhost:5000/api/skill/all').respond(data);
            skillsService.getSkills().then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        });
    });
    
})();
