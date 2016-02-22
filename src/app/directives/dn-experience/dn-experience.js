app.directive('dnExperience', ['$window', function ($window) {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        jobs: "=" 
    };
    directive.templateUrl = "app/directives/dn-experience/dn-experience.html";

    return directive;
}]);
