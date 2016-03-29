app.directive('dnFlipcard', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        rotate: "=",
        imageFrontUrl: "=",
        textFront: "=",
        caption: "=",
        captionIconClass: "=",
        textBack: "=",
        imageBackUrl: "=" 
    };
    directive.templateUrl = "app/directives/dn-flipcard/dn-flipcard.html";

    return directive;
}]);
