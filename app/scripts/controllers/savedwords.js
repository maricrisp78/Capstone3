'use strict';

/**
 * @ngdoc function
 * @name Capstone3.controller:SavedwordsCtrl
 * @description
 * # SavedwordsCtrl
 * Controller of the Capstone3
 */
angular.module('Capstone3')
  .controller('SavedwordsCtrl', function ($scope, $localStorage) {
 	$scope.storage = $localStorage;
      
  });
