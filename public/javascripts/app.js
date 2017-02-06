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
            name: 'earthquakeMap',
            url: '/',
            templateUrl: 'javascripts/template/earthquakeMap.html',
            controller: 'MapController'
        })
        .state('quakes', {
            name: 'quakes',
            url: '/quakes',
            templateUrl: 'javascripts/template/quakes.html',
            controller: 'QuakesController'
        });
});
