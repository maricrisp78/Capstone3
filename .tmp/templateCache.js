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
    "</input> --> <br> <!-- {{wordsFound.list[0].definition}} --> <ul class=\"wordresults\"> <li ng-animate=\"'animate'\" ng-repeat=\"word in wordsFound.list | limitTo: 3\"> <strong>{{list.word}}</strong> | {{list.word}}, {{list.definition}} <br> {{list.word[0].example}} {{list.word[0].thumbsup}} <br> {{list.word[0].thumbsdown}} <br> <!-- {{word.thumbnail}} --> <br> <button class=\"saveword\" id=\"btn btn-lg btn-primary\" ng-click=\"saveWord(word)\">Save Word</button> <br> <br> </li> </ul>  <div ng-if=\"searchQuery\"> <p class=\"lead\">{{wordsFound.count}} words found matching the query: {{searchQuery}}. </p> <div ng-if=\"storage.savedWords\"> <h2>Saved Words</h2> <ul class=\"saved-words-list\"> <li ng-repeat=\"word in storage.savedWords\"> <a ng-href=\"/#/wordSearch/{{word.list}}\" class=\"btn btn-lg btn-primary\">{{word.list}}</a> </li> </ul> </div></div>"
  );


  $templateCache.put('views/savedwords.html',
    "<div> <button class=\"savedWords\" id=\"btn btn-lg btn-primary\">Saved Words</button> </div> <div> <ul class=\"wordresults\"> <li ng-repeat=\"word in storage.savedWords | limitTo: 15\"> <strong>{{word.list}}</strong> | {{word.list}}, {{word.definition}} <br> {{word.list[0].definition}} {{word.definition[0].example}} <br> </li></ul> </div>"
  );

}]);
