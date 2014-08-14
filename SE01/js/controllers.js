var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', function MyController($scope) {
    $scope.author = {
        'name' : 'Hugo Espinosa',
        'title' : 'Staff',
        'company' :  'Softcoders'
    }
});