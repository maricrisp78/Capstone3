'use strict';

/**
 * @ngdoc service
 * @name Capstone3
 * @description
 * # citysearch
 * Factory in the Capstone3.
 */
angular.module('Capstone3')
  .factory('wordSearch', function ($resource) {
  


    return $resource(
      'https://mashape-community-urban-dictionary.p.mashape.com/define?term=:query', {},
      {
        find: {
          method: 'GET',
          headers:{
            'X-Mashape-Key': 'zEe48mTpJumshw1QLLrbFi4g6huSp1AoAgBjsnsYqmtxr90Wqm'
          },
          params: {
            query: ''
          },
          isArray: false
        }
      });
    });

