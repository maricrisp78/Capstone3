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
  .config(["$routeProvider", function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name Capstone3.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Capstone3
 */



angular.module('Capstone3')
  .controller('MainCtrl', ["$scope", "wordSearch", "$localStorage", function ($scope, wordSearch, $localStorage) {


    $scope.findWords = function(){
    	console.log('clicking here');
        $scope.wordsFound = wordSearch.find({
             query: $scope.word
        });
    };


    $scope.saveWords = function(word){
        if (!$localStorage.savedWords){
            $localStorage.savedWords = [];
        
            $localStorage.savedWords.push(word);
        } else {
            

            var save = true; // Initialize the save decision variable.


            for (var i=0; i < $localStorage.savedWords.length; i++){
                if ($localStorage.savedWords[i].unique_id === word.unique_id) {
                    // This is a duplicate, so don't save (variable set to false).
                    save = false;
                }
            }
                // console.log($localStorage.savedWords[i].id);

            if (save === true){
                $localStorage.savedWords.push(word);
            } else {
                console.log('word already saved');
            }
        }
    };

  }]);

// $( document ).ready(function() {

// var userInfo = {
//     username: ' guest'

// };


//     $('#login-form').on('click', function() {
//         $('#login-form').hide();
//         $('.user-info').show();
//         $('.username').text(userInfo.username);

//     $('.submit').on('click', function() {
//         $('.submit').show();
//         $('#login-form').hide();
//         $('.user-info').hide() ++;
        
//     });
// });
// });
'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectsApp
 */
angular.module('Capstone3')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc service
 * @name Capstone3
 * @description
 * # citysearch
 * Factory in the Capstone3.
 */
angular.module('Capstone3')
  .factory('wordSearch', ["$resource", function ($resource) {
  


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
      }
    );

  }]);


angular.module('projectsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"wordlookup\"> <p> <label class=\"Wordbox\">Look up.... <input type=\"text\" name=\"word\" method=\"get\" minlength=\"2\" ng-model=\"word\" placeholder=\"What's the Word?\" required> </label> </p> <p> <button class=\"btn btn-lg btn-primary\" ng-click=\"findWords()\">Look it up!</button> <!--  <p>\n" +
    "          <label class=\"wordbox\">Look up... \n" +
    "            <input type=\"text\" name=\"word\" method=\"get\" minlength=\"2\" ng-model=\"word\" placeholder=\"What's the word?\" required>\n" +
    "          </label>\n" +
    "      </p>\n" +
    "\n" +
    "        \n" +
    "          <button class=\"btn btn-lg btn-primary\" ng-click=\"findWords()\">Look it up!</button> --> </p></div> <!-- <p>\n" +
    "<button class=\"btn btn-lg btn-primary\" ng-click=\"lookUp()\">Look it up!</button>\n" +
    "</p>\n" +
    "\n" +
    "<input type=\"text\" >\n" +
    "\n" +
    "</input> --> <br> <!-- {{wordsFound.list[0].definition}} --> <ul class=\"wordresults\"> <li ng-animate=\"'animate'\" ng-repeat=\"word in wordsFound.list | limitTo: 3\"> <strong>{{word.word}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} <br> <!-- {{word.thumbnail}} --> <br> <button class=\"saveword\" id=\"btn btn-lg btn-primary\" ng-click=\"saveWord(word)\">Add to favorite words!</button> <br> </li> </ul>  <div ng-if=\"searchQuery\"> <p class=\"lead\">{{wordsFound.count}} words found matching the query: {{searchQuery}}. </p> <div ng-if=\"storage.savedWords\"> <h2>Favorite Words</h2> <ul class=\"saved-words-list\"> <li ng-repeat=\"word in storage.savedWords\"> <a ng-href=\"/#/wordSearch/{{word.list}}\" class=\"btn btn-lg btn-primary\">{{word.list}}</a> </li> </ul> </div></div>"
  );


  $templateCache.put('views/savedwords.html',
    "<div> <button class=\"savedWords\" id=\"btn btn-lg btn-primary\">Saved Words</button> </div> <div> <ul class=\"wordresults\"> <li ng-repeat=\"word in storage.savedWords | limitTo: 15\"> <strong>{{word.list}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.definition[0].thubmsup}} <br> </li></ul> </div>"
  );

}]);
