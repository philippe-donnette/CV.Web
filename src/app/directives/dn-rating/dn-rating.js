app.directive('dnRating', [function () {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        rating: "=",
        max: "=",
        ratings: "@" 
    };
    directive.templateUrl = "app/directives/dn-rating/dn-rating.html";
    directive.link = function(scope, elem, attr) {
        scope.ratings = [];
        for(var i = 1; i <= scope.max; i++) {
            if(i <= scope.rating)
                scope.ratings.push({ id: i, selected: true });
            else
                scope.ratings.push({ id: i, selected: false });
        }
    };
    return directive;
}]);
