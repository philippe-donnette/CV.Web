(function () {
    describe("experienceService tests", function() {
        var experienceService, $httpBackend;
    
        beforeEach(function() {
            module('dnApp'); 
            module(function($provide) {
            });
        });
        
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        
        beforeEach(function() {    
            inject(function(_$httpBackend_, _experienceService_) {
                $httpBackend = _$httpBackend_;
                experienceService = _experienceService_;
            });
        });
    
        it('should have a getExperiences function', function () { 
            expect(angular.isFunction(experienceService.getExperiences)).toBe(true);
        });
        
        it("Testing getExperiences", function() {
                var data = [
                        { id: 1, companyName: "DOCDATA" },
                        { id: 2, companyName: "GROOVYTRAIN" }
                    ];
                $httpBackend.expectGET('http://localhost:5057/api/experience/all').respond(data);
                experienceService.getExperiences().then(function(response) {
                    expect(response).toEqual(data);
                }); 
                $httpBackend.flush();
        });
    
        it('should have a getExperience function', function () { 
            expect(angular.isFunction(experienceService.getExperience)).toBe(true);
        });
        
        it("Testing getExperience", function() {
                var data = { id: 1, companyName: "DOCDATA" };
                $httpBackend.expectGET('http://localhost:5057/api/experience/1').respond(data);
                experienceService.getExperience(1).then(function(response) {
                    expect(response).toEqual(data);
                }); 
                $httpBackend.flush();
        }); 
        
        it('should have a getSkills function', function () { 
            expect(angular.isFunction(experienceService.getSkills)).toBe(true);
        });
        
        it("Testing getSkills", function() {
            var data = [
                    { Id: 1, Name: "ASP.NET 5" },
                    { Id: 2, Name: "Angular2" }
                ];
            $httpBackend.expectGET('http://localhost:5057/api/experience/1/skills').respond(data);
            experienceService.getSkills(1).then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush(); 
        });
    });
            
})();
