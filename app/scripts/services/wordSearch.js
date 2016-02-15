'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularJsApp.
 */
angular.module('Capstone3')
  .factory('wordsearch', function ($resource) {
  
    // Service logic
    // ...

    // Public API here

    return $resource(
      'http://api.urbandictionary.com/v0/define?term=dumb', {},
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