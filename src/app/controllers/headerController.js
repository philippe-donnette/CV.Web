app.controller('headerController', ['$scope', function ($scope) {
    
    $scope.projects = [
        { href: "root.project({ id: 10, title: 'cv' })", title: "cv", id: 1 },
        { href: "root.project({ id: 8, title: 'deptford-park-football' })", title: "Deptford Park Football", id: 2 }
    ];
}]);