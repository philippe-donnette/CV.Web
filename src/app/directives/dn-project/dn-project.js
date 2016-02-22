app.directive('dnProject', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        project: "=" 
    };
    directive.templateUrl = "app/directives/dn-project/dn-project.html";

    return directive;
}]);
