app.directive('dnPageHeader', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        title: "=",
        iconClass: "=",
        breadcrumb: "=" 
    };
    directive.templateUrl = "app/directives/dn-page-header/dn-page-header.html";

    return directive;
}]);
