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
    
        it('should have a getImages function', function () { 
            expect(angular.isFunction(projectService.getImages)).toBe(true);
        });
        
        it("Testing getImages", function() {
            var data = [
                    { id: 1, title: "An image 1" },
                    { id: 2, title: "An image title 2" }
                ];
            $httpBackend.expectGET('http://localhost:5057/api/project/1/images').respond(data);
            projectService.getImages(1).then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush(); 
        });
    
        it('should have a getProjects function', function () { 
            expect(angular.isFunction(projectService.getProjects)).toBe(true);
        });
        
        it("Testing getProjects", function() {
            var data = [
                    { Id: 1, Name: "CV.Web" },
                    { Id: 2, Name: "Donola.CV" }
                ];
            $httpBackend.expectGET('http://localhost:5057/api/project/all').respond(data);
            projectService.getProjects().then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        });
    
        it('should have a getProject function', function () { 
            expect(angular.isFunction(projectService.getProject)).toBe(true);
        });
        
        it("Testing getProject", function() {
            var data = { Id: 1, Name: "CV.Web" };
            $httpBackend.expectGET('http://localhost:5057/api/project/1').respond(data);
            projectService.getProject(1).then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush();
        }); 
        
        it('should have a getSkills function', function () { 
            expect(angular.isFunction(projectService.getSkills)).toBe(true);
        });
        
        it("Testing getSkills", function() {
            var data = [
                    { Id: 1, Name: "ASP.NET 5" },
                    { Id: 2, Name: "Angular2" }
                ];
            $httpBackend.expectGET('http://localhost:5057/api/project/1/skills').respond(data);
            projectService.getSkills(1).then(function(response) {
                expect(response).toEqual(data);
            }); 
            $httpBackend.flush(); 
        });
    });
            
})();
