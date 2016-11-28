"use strict";

var myApp = angular.module('myApp', ['ui.router','satellizer']);

myApp
	.config(function($stateProvider, $urlRouterProvider, $authProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'ngapp/views/home.html',
                    controller: 'StartController'
                })
                 .state('users', {
                    url: '/users',
                    templateUrl: 'ngapp/views/users.html',
                    controller: 'UsersController'
                })
                  .state('countries', {
                    url: '/countries',
                    templateUrl: 'ngapp/views/countries.html',
                    controller: 'CountriesController'
                })
        })
