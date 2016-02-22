app.directive('dnTagCloud', ['$window', function ($window) {

    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        tags: "=",
        container: "="
    };
    directive.templateUrl = "app/directives/dn-tag-cloud/dn-tag-cloud.html";
    directive.controller = 'dnTagCloudController';

    return directive;
}]);

app.controller('dnTagCloudController', ['$scope', '$filter', '$uibModal', function ($scope, $filter, $uibModal) { 
    var random = function() {
        return 0.5 - Math.random();
    };
    
    $scope.tags = $filter("orderBy")($scope.tags, random);
    
    $scope.openTag = function (tag) {
        $scope.tag = tag;
        var modalController = ['$scope', '$uibModalInstance', 'tag', function ($scope, $uibModalInstance, tag) {
            $scope.tag = tag;

            $scope.close = function () {
                $uibModalInstance.close();
            };
        }];

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dn-tag-cloud-modal.html',
            controller: modalController,
            size: "lg",
            resolve: {
                tag: function () {
                    return $scope.tag;
                }
            }
        });    
    };
 }]);