app.directive('dnVersions', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        versions: "=" 
    };
    directive.templateUrl = "app/directives/dn-versions/dn-versions.html";
    return directive;
}]);
