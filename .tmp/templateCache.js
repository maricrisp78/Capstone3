angular.module('projectsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"aboutpage\"> <div class=\"aboutnav navbar-nav\"><a href=\"../index.html\" class=\"returnhome\">Back to home page</a></div> <br> <br> <p class=\"about\"><strong>About Marictionary:</strong></p></div>"
  );


  $templateCache.put('views/main.html',
    "<div> <label class=\"wordlookup\">Look up.... <input type=\"text\" name=\"word\" method=\"get\" minlength=\"2\" ng-model=\"word\" placeholder=\"What's the Word?\" required> <button class=\"lookupbutton\" ng-click=\"findWords()\">Look it up!</button> </label> </div> <div ng-if=\"searchQuery\"> <p class=\"lead\">{{wordsFound.count}} words found matching the query: {{searchQuery}}. </p> </div> <p> <a href=\"#/savedWords\" class=\"savedWords\" id=\"btn btn-lg btn-primary\">Favorite Words</a> </p> <br> <!-- {{wordsFound.list[0].definition}} --> <div class=\"wordresults\"> <p ng-animate=\"'animate'\" ng-repeat=\"word in wordsFound.list | limitTo: 5\"> <strong>{{word.word}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} {{word.thumbnail}} <button class=\"saveword\" id=\"btn btn-lg btn-primary\" ng-click=\"saveWord(word)\">Add to favorite words!</button> <div ng-if=\"storage.savedWords\"> <h2>Favorite Words</h2> <ul class=\"saved-words-list\"> <li ng-repeat=\"word in storage.savedWords\"> <a ng-href=\"/#/wordSearch/{{word.word}}\" class=\"btn btn-lg btn-primary\">{{word.word}}</a> </li> </ul> </div></p></div>"
  );


  $templateCache.put('views/savedwords.html',
    "<p class=\"Favorites\">Favorite Words</p> <a href=\"#/index.html\" class=\"backtosearch\">Back to Search </a> <div> <ul class=\"wordresults\"> <li ng-repeat=\"word in storage.savedWords | limitTo: 15\"> <strong>{{word.word}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} {{word.thumbnail}} <br> </li></ul> </div>"
  );


  $templateCache.put('views/thankyou.html',
    "<div class=\"thankyou\"></div> <div> <link rel=\"stylesheet\" href=\"styles/main.css\"> <p> Thank you for subscribing to our email list</p> <iframe src=\"//giphy.com/embed/3oEduUi298ZCWdnPKU\" width=\"480\" height=\"319\" frameborder=\"0\" class=\"giphy-embed\" allowfullscreen></iframe><p><a href=\"http://giphy.com/gifs/manrepeller-3oEduUi298ZCWdnPKU\"></a></p> <a href=\"../index.html\" class=\"returnhome\">Back to home page </a> </div>"
  );

}]);
