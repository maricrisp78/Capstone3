'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:SavedhikesCtrl
 * @description
 * # SavedhikesCtrl
 * Controller of the angularJsApp
 */
angular.module('Capstone3')
  .controller('SavedwordsCtrl', function ($scope, $localStorage) {
 	$scope.storage = $localStorage;
      
  });
