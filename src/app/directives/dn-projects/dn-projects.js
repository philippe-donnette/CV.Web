app.directive('dnProjects', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        projects: "=" 
    };
    directive.templateUrl = "app/directives/dn-projects/dn-projects.html";

    return directive;
}]);
