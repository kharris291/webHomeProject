/**
 * Created by Kev on 05/09/2014.
 */

var Kh = Kh || {};

Kh.FLOAT_REGEXP = /^\d+((\.|\,)\d\d)?$/;
Kh.INTEGER_REGEXP = /^\d+$/;
Kh.TIME_REGEXP = /^([0-9]\:[0-5][0-9])|([0-1][0-9]\:[0-5][0-9])|(2[0-3]\:[0-5][0-9])$/;
Kh.MIXED_NUMBERS_AND_TEXT= /^(?=.*\d)(?=.*[a-zA-Z])/;
Kh.MIN_MAX_LENGTH= /^.{8,100}$/;

Kh.NO_ROWS_UPDATED ="no_rows_updated";

Kh.App = angular.module('Kh.app', [
    'kh.dashboard',
    'ngRoute'
]).config(['$routeProvider',function(route){

    route.
        when("/homeproject/KevinHarris/views/", {
            controller: 'MainController',
            templateUrl: "/homeproject/KevinHarris/views/pages/home.html"
        }).
        when("/homeproject/KevinHarris/views/home", {
            controller: 'MainController',
            templateUrl: "/homeproject/KevinHarris/views/pages/home.html"
        }).
        when("/homeproject/KevinHarris/views/contact", {
            controller: 'MainController',
            templateUrl: "/homeproject/KevinHarris/views/pages/contact.html"
        }).
        when("/homeproject/KevinHarris/views/about", {
            controller: 'MainController',
            templateUrl: "/homeproject/KevinHarris/views/pages/about.html"
        });
}]);