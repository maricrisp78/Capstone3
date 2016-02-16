'use strict';

/**
 * @ngdoc overview
 * @name projectsApp
 * @description
 * # projectsApp
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
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */



angular.module('Capstone3')
  .controller('MainCtrl', ["$scope", "wordSearch", "$localStorage", function ($scope, wordSearch, $localStorage) {

    $scope.findWord = function(){
        $scope.wordFound = wordSearch.find({
             term: $scope.list
       
        });
    };


    $scope.saveWord = function(word){
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
angular.module('projectsApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('projectsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<!-- <p>\n" +
    "<button class=\"btn btn-lg btn-primary\" ng-click=\"lookUp()\">Look it up!</button>\n" +
    "</p>\n" +
    "\n" +
    "<input type=\"text\" >\n" +
    "\n" +
    "</input> --> <br> <!-- {{wordsFound.list[0].definition}} --> <ul class=\"wordresults\"> <li ng-animate=\"'animate'\" ng-repeat=\"word in wordsFound.list | limitTo: 7\"> <strong>{{word.list}}</strong> | {{word.list}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.definition[0].thumbsup}} <br> {{word.definition[0].thumbsdown}} <br> <!-- {{word.thumbnail}} --> <br> <button class=\"saveword\" id=\"btn btn-lg btn-primary\" ng-click=\"saveWord(word)\">Save Word</button> <br> <br> </li> </ul>  <div ng-if=\"searchQuery\"> <p class=\"lead\">{{wordsFound.count}} words found matching the query: {{searchQuery}}. </p> <div ng-if=\"storage.savedWords\"> <h2>Saved Words</h2> <ul class=\"saved-words-list\"> <li ng-repeat=\"word in storage.savedWords\"> <a ng-href=\"/#/wordSearch/{{word.list}}\" class=\"btn btn-lg btn-primary\">{{word.list}}</a> </li> </ul> </div></div>"
  );

}]);
