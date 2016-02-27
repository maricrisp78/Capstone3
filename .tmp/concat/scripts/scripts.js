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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name Capstone3.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Capstone3
 */


// $( document ).ready(function() {
    
//     var userInfo = {
//         firstName: '',
//         lastName: ''
//     };
// };

// $('#login-form a').on('click', function() {
//         $('#login-form').show();
//         $('.navbar-right user-info').hide();
//         $('.user-fullname').text(userInfo.firstName + ' ' + userInfo.lastName);

// $('.btn-sm').on('click', function() {
//         $('.btn btn-default btn-sm').hide();
//         $('#login-form').show();
//         $('.navbar-right user-info').hide() ++;
        
//     });
//     }); 



angular.module('Capstone3')
  .controller('MainCtrl', ["$scope", "wordSearch", "$localStorage", function ($scope, wordSearch, $localStorage) {


    $scope.findWords = function(){
    	console.log('clicking here');
        $scope.wordsFound = wordSearch.find({
             query: $scope.word
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

$(function() {
    $(".menu-trigger").click(function() {
        $(".navbar").slideToggle(400, function() {
        $(this).toggleClass("nav-expanded").css('display', '');
        
        
    });
    
});


});


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


'use strict';

/**
 * @ngdoc function
 * @name Capstone3.controller:SavedwordsCtrl
 * @description
 * # SavedwordssCtrl
 * Controller of the Capstone3
 */
angular.module('Capstone3')
  .controller('SavedwordsCtrl', ["$scope", "$localStorage", function ($scope, $localStorage) {
 	$scope.storage = $localStorage;
      
  }]);

angular.module('projectsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<p> <label class=\"wordlookup\">Look up.... <input type=\"text\" name=\"word\" method=\"get\" minlength=\"2\" ng-model=\"word\" placeholder=\"What's the Word?\" required> <button class=\"lookupbutton\" ng-click=\"findWords()\">Look it up!</button> </label> </p>  <p> <div ng-if=\"searchQuery\"> <p class=\"lead\">{{wordsFound.count}} words found matching the query: {{searchQuery}}. </p>   </div> <br> <!-- {{wordsFound.list[0].definition}} --> <div class=\"wordresults\"> <p ng-animate=\"'animate'\" ng-repeat=\"word in wordsFound.list | limitTo: 5\"> <strong>{{word.word}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} {{word.thumbnail}} <button class=\"saveword\" id=\"btn btn-lg btn-primary\" ng-click=\"saveWord(word)\">Add to favorite words!</button> <div ng-if=\"storage.savedWords\"> <h2>Favorite Words</h2> <ul class=\"saved-words-list\"> <li ng-repeat=\"word in storage.savedWords\"> <!--    <a ng-href=\"/#/current/{{word.word}}\" class=\"btn btn-lg btn-primary\">{{word.word}}</a> --> </li> </ul> </div></p></div></p>"
  );


  $templateCache.put('views/savedwords.html',
    "<div> <p class=\"saved\">SAVED WORDS</p> </div> <div> <ul class=\"wordresults\"> <li ng-repeat=\"word in storage.savedWords | limitTo: 15\"> <strong>{{word.word}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.definition[0].thubmsup}} <br> </li></ul> </div>"
  );


  $templateCache.put('views/thankyou.html',
    "<p> Thank you for subscribing to our email list</p> <link rel=\"stylesheet\" type=\"text/css\"> <iframe src=\"//giphy.com/embed/3oEduUi298ZCWdnPKU\" width=\"480\" height=\"319\" frameborder=\"0\" class=\"giphy-embed\" allowfullscreen></iframe><p><a href=\"http://giphy.com/gifs/manrepeller-3oEduUi298ZCWdnPKU\"></a></p> <a href=\"index.html\">Back home</a>"
  );

}]);
