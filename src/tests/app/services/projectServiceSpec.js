(function () {
    describe("projectService tests", function() {
        var projectService, $httpBackend;
    
        beforeEach(function() {
            module('dnApp'); 
            
            module(function($provide) {
            
            });
        });
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
        beforeEach(function() {
            
                inject(function(_$httpBackend_, _projectService_) {
                    $httpBackend = _$httpBackend_;
                    projectService = _projectService_;
                });
        });
    
        it('should have a getProjects function', function () { 
            expect(angular.isFunction(projectService.getProjects)).toBe(true);
        });
    
        it("Testing getProjects", function() {
                var data = [
                        { Id: 1, Name: "CV.Web" },
                        { Id: 2, Name: "Donola.CV" }
                    ];
                $httpBackend.expectGET('http://localhost:5000/api/project/all').respond(data);
                projectService.getProjects().then(function(response) {
                    expect(response.data).toEqual(data);
                }); 
                $httpBackend.flush();
            });
        });
    
})();
