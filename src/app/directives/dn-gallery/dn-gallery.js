app.directive('dnGallery', [function () {
    
    var directive = {};
    directive.restrict = "E";
    directive.transclude = true;
    directive.scope = {
        images: "="
    };
    directive.templateUrl = "app/directives/dn-gallery/dn-gallery.html";
    directive.controller = 'dnGalleryController';
    
    return directive;
}]);

app.controller('dnGalleryController', ['$scope', '$filter', '$uibModal', function ($scope, $filter, $uibModal) {
    
    $scope.openImage = function (image) {
        $scope.image = image;// angular.copy($filter("filter")($scope.images, { id: id }));
        var modalController = ['$scope', '$uibModalInstance', 'image', function ($scope, $uibModalInstance, image) {
            $scope.image = image; //project[0];

            $scope.close = function () {
                $uibModalInstance.close();
            };
        }];

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'dn-gallery-modal.html',
            controller: modalController,
            size: "lg",
            resolve: {
                image: function () {
                    return $scope.image;
                }
            }
        });
    };
}]);