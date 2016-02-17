'use strict';

/**
 * @ngdoc service
 * @name Capstone3
 * @description
 * # citysearch
 * Factory in the Capstone3.
 */
angular.module('Capstone3')
  .factory('wordsearch', function ($resource) {
  


    return $resource(
      'http://api.urbandictionary.com/v0/define?term=:term', {},
      {
        find: {
          method: 'GET',
          headers:{
            'X-Mashape-Key': 'zEe48mTpJumshw1QLLrbFi4g6huSp1AoAgBjsnsYqmtxr90Wqm'
          },
          params: {
            term: ''
          }
        }
      }
    );

  });