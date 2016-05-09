app.directive('dnPageHeader', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        pageTitle: "=",
        iconClass: "=",
        breadcrumb: "=" 
    };
    directive.templateUrl = "app/directives/dn-page-header/dn-page-header.html";

    return directive;
}]);
