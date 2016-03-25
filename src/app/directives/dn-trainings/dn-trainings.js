app.directive('dnTrainings', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        items: "=" 
    };
    directive.templateUrl = "app/directives/dn-trainings/dn-trainings.html";

    return directive;
}]);
