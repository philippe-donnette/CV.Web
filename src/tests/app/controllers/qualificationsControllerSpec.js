(function () {
    describe("qualificationsController tests", function() {
        var qualificationService, trainingService, scope;
    
        beforeEach(function() {
            
            var mockQualificationService = {};
            var mockTrainingService = {};
            
            module('dnApp', function ($provide) { 
                $provide.value('qualificationService', mockQualificationService);
                $provide.value('trainingService', mockTrainingService);
             });
            
            inject(function ($q) {
                mockQualificationService.getQualifications = function() {
                    var defer = $q.defer();
                    defer.resolve([
                        { id: 1, schoolName: "H.E.I.G" },
                        { id: 2, schoolName: "Lycee Martin Luther King" }
                    ]);
                    return defer.promise;
                };
                mockTrainingService.getTrainings = function() {
                    var defer = $q.defer();
                    defer.resolve([
                        { id: 1, provider: "scrum.org" },
                        { id: 2, provider: "janet" }
                    ]);
                    return defer.promise;
                }; 
             });
            
        });
    
        beforeEach(inject(function($controller, $rootScope, _qualificationService_, _trainingService_) {
            scope = $rootScope.$new();
            qualificationService = _qualificationService_; 
            trainingService = _trainingService_;
            
            spyOn(qualificationService, 'getQualifications').and.callThrough();
            spyOn(trainingService, 'getTrainings').and.callThrough();
            
            $controller('qualificationsController', {$scope: scope, qualificationService: qualificationService, trainingService: trainingService });
            scope.$digest();
        }));
        
        it("Should have qualifications set", function() {
            expect(scope.studies).not.toBe(null);
            expect(scope.studies).not.toBe(undefined);
        });
            
        it("Should call getQualifications from qualificationService", function() { 
            expect(qualificationService.getQualifications).toHaveBeenCalled();
        });
        
        it("Should have trainings not null or undefined", function() {
            expect(scope.trainings).not.toBe(null);
            expect(scope.trainings).not.toBe(undefined);
        });
        
        it("Should call getTrainings from trainingService", function() { 
            expect(trainingService.getTrainings).toHaveBeenCalled();
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


/*
(function () {
    describe("qualificationsController tests", function() {
        var $controller, qualificationService, trainingService, createController, $scope, $q, deferred;
    
        beforeEach(function() {
            module('dnApp');
            
            module(function($provide) {
                
                $provide.value('qualificationService', {
                    getQualifications: function() {
                        return { 
                            then: function(response) {
                                return response([
                                        { id: 1, schoolName: "H.E.I.G" },
                                        { id: 2, schoolName: "Lycee Martin Luther King" }
                                    ]);
                            }
                        };
                    }
                });
                
                $provide.value('trainingService', {
                    getTrainings: function() {
                        return { 
                            then: function(response) {
                                return response([
                                        { id: 1, provider: "scrum.org" },
                                        { id: 2, provider: "janet" }
                                    ]);
                            }
                        };
                    }
                });
            
                return null;
            });
        });
    
        beforeEach(module('app/views/header.html'));
        beforeEach(module('app/views/footer.html'));
        beforeEach(module('app/views/home.html'));
    
        beforeEach(function() {
        
            inject(function($controller, _$rootScope_, _$q_, _qualificationService_, _trainingService_) {
                $q = _$q_;
                deferred = _$q_.defer();
                $scope = _$rootScope_.$new();
                qualificationService = _qualificationService_;
                trainingService = _trainingService_;
                
                createController = function(params) {
                    return $controller("qualificationsController", {
                        $scope: $scope,
                        $stateParams: params || {},
                        qualificationService: _qualificationService_,
                        trainingService: _trainingService_
                    });
                };
                
            });
        });     
        
        it("Should have qualifications set", function() {
            createController();
            expect($scope.studies).not.toBe(null);
            expect($scope.studies).not.toBe(undefined);
        });
            
        it("Should call getQualifications from qualificationService", function() { 
            spyOn(qualificationService, 'getQualifications').and.callThrough();
            createController();
            expect(qualificationService.getQualifications).toHaveBeenCalled();
        });
        
        it("Should have trainings not null or undefined", function() {
            createController();
            expect($scope.trainings).not.toBe(null);
            expect($scope.trainings).not.toBe(undefined);
        });
        
        it("Should call getTrainings from trainingService", function() { 
            spyOn(trainingService, 'getTrainings').and.callThrough();
            createController();
            expect(trainingService.getTrainings).toHaveBeenCalled();
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
*/

