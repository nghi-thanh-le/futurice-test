'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngMap', 'ui.router']);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('earthquakeMap', {
            url: '/',
            templateUrl: 'js/template/earthquakeMap.html',
            controller: 'MapController'
        })
        // .state('earthquakeMap', {
        //     url: '/',
        //     templateUrl: 'js/template/quakes.html',
        //     controller: 'QuakesController'
        // })
        .state('quakes', {
            url: '/quakes',
            templateUrl: 'js/template/quakes.html',
            controller: 'QuakesController'
        });
});
