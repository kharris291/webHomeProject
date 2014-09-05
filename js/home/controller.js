/**
 * Created by Kev on 05/09/2014.
 */
'use strict';

Kh.Dashboard.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})