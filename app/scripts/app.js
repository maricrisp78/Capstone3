'use strict';

/**
 * @ngdoc overview
 * @name Capstone3
 * @description
 * # Capstone3
 *
 * Main module of the application.
 */
angular
  .module('Capstone3', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/savedWords', {
        templateUrl: 'views/savedwords.html',
        controller: 'SavedwordsCtrl',
        controllerAs: 'savedWords'
      })
      .when('/savedWords', {
        templateUrl: 'views/savedwords.html',
        controller: 'SavedwordsCtrl',
        controllerAs: 'savedWords'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
