app.directive('dnQualifications', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        studies: "=" 
    };
    directive.templateUrl = "app/directives/dn-qualifications/dn-qualifications.html";

    return directive;
}]);
