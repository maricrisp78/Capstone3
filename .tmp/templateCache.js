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
