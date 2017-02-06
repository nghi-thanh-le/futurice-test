angular.module('myApp')
    .controller('MapController', function($scope, $http, $window, NgMap, USGS_Data) {
        $scope.features = USGS_Data;
        NgMap.getMap().then(function(map) {
            $scope.map = map;
        });

        $scope.showDetailMouseOver = function(e, feature) {
            $scope.feature = feature;
            $scope.hideDetailClick();
            $scope.map.showInfoWindow('iw-mouse-over', feature.id);
        };

        $scope.showDetailClick = function(e, feature) {
            $scope.feature = feature;
            $scope.hideDetailMouseOver();
            $scope.map.showInfoWindow('iw-clicked', feature.id);
        };

        $scope.hideDetailMouseOver = function() {
            $scope.map.hideInfoWindow('iw-mouse-over');
        };
        $scope.hideDetailClick = function() {
            $scope.map.hideInfoWindow('iw-clicked');
        };
    })
    .controller('QuakesController', function($scope, USGS_Data) {
        $scope.features = USGS_Data;

        $scope.sortType = ''; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.resetSort = function() {
            $scope.sortType = '';
            $scope.sortReverse = false;
        };
    });
