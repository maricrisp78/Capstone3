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
      .when( "/location", {} )
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


    $scope.saveWord = function(word){
        console.log(word);
        if (!$localStorage.savedWords){
            $localStorage.savedWords = [];
        
            $localStorage.savedWords.push(word);
        } else {
            

            var save = true; // Initialize the save decision variable.


            for (var i=0; i < $localStorage.savedWords.length; i++){
                if ($localStorage.savedWords[i].defid === word.defid) {
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
    $scope.unsaveWord = function(word){
           var wordIndex = $localStorage.savedWords.indexOf(word);
           if (wordIndex > -1){
             $localStorage.savedWords.splice(wordIndex, 1);
           }
    };

  }]);




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
      'Capstone3',
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
      });
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
    "<div class=\"aboutpage\"> <div class=\"aboutnav navbar-nav\"><a href=\"../index.html\" class=\"returnhome\">Back to home page</a></div> <br> <br> <p class=\"about\"><strong><b>About Marictionary:<b></b></b></strong> </p>Marictionary is a derivative of urbandictionary.com. Urban Dictionary is a satirical crowdsourced online dictionary of slang words and phrases that was founded in 1999 as a parody of Dictionary.com by then-college freshman Aaron Peckham. Some of the definitions on the website can be found as early as 2001, however most early definitions are from 2003. At the start of 2014, the dictionary featured over seven million definitions, while 2,000 new daily entries were being added. In November 2014, the Advertise page of the website states that, on a monthly basis, Urban Dictionary averages 72 million impressions and 18 million unique readers.[2] Anyone with either a Facebook or Gmail account can make a submission to the dictionary, and it is claimed that all entries are reviewed by volunteers. Site visitors may agree/disagree with definitions by an up/down vote system. <br> <br> <b>History<b> 1999–2003: Founding, UK high court case, Advertising[edit] The site was founded in 1999 by Peckham while he was a freshman computer science major at California Polytechnic State University, San Luis Obispo (Cal Poly). Peckham had previously created a spoof version of the Ask Jeeves web search engine while studying at Cal Poly but closed the website after he received an infringement letter. <br> <br> During the \"Internet Underground\" panel of the 2011 ROFLCon Summit, Peckham explained that, as a computer science student, his primary motivation was to construct a website; but he was also dissatisfied with the conventional English-language dictionary, as it \"was telling us how English was spoken, instead of reflecting how English was actually spoken.\" For the launch of Urban Dictionary, Peckham installed the website on a FileMaker Pro web server that was operated from under his dormitory room bed at Cal Poly.[4] One of the first definitions on the site was \"O.G.\", defined as \"a retired gangster who sits on the porch in the ghetto and preaches to the youngsters\". <br> <br> For the first four years, the site generated revenue without making a profit for Peckham, but did not incur any costs,[dubious – discuss] so Peckham's role was mostly passive. In 2003,[6] Peckham paid more attention to the site after a news article revealed that United Kingdom (UK) high court judges had used Urban Dictionary to assist them in a case involving two rappers (the judges unsuccessfully attempted to comprehend slang language that the rappers used). <br> <br> According to Peckham in 2011, the site first displayed advertising around 2004. Peckham explained that advertising networks connect companies to Urban Dictionary.</b></b></div>"
  );


  $templateCache.put('views/copy.html',
    "<!doctype html> <html> <head> <meta charset=\"utf-8\"> <title></title> <meta name=\"description\" content=\"\"> <meta name=\"viewport\" content=\"width=device-width\"> <!-- Place favicon.ico and apple-touch-icon.png in the root directory --> <!-- build:css(.) styles/vendor.css --> <!-- bower:css --> <!-- endbower --> <!-- endbuild --> <!-- build:css(.tmp) styles/main.css --> <link rel=\"stylesheet\" href=\"styles/main.css\"> <link rel=\"stylesheet\" href=\"bower_components/animate.css/animate.css\"> <!-- endbuild --> <header> <a name=\"#backtotop\"></a> <nav class=\"navbar navbar-default navbar-fixed-top\"> <div class=\"container\"> <ul> <li> <a href=\"index.html\">Home</a> </li> <li> <a href=\"/#/about\">About</a> </li> <li> <a href=\"/#/footer\">Our location</a> </li> <li> <a href=\"#/savedWords\" class=\"savedWords\">Favorite Words</a> </li>  </ul> </div> </nav> </header> </head> <body ng-app=\"Capstone3\"> <!--[if lte IE 8]>\n" +
    "      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "    <![endif]--> <!-- Add your site or application content here --> <br> <img class=\"wordword rubberBand animated\" src=\"images/wordS.png\" style=\"width: 400px;height: auto\">  <aside id=\"social\"> <!-- <p class=\"follow\">Follow Us</p> --> <a href=\"https://twitter.com\"> <img src=\"images/social/twittericon.png\" style=\"width: 55px;height: auto\"></a> <a href=\"http://facebook.com\"> <img src=\"images/social/facebookicon.png\" style=\"width: 55px;height: auto\"></a> <a href=\"https://instagram.com\"> <img src=\"images/social/instagramicon.png\" style=\"width: 55px;height: auto\"></a> <a href=\"mailto:marieashley_78@hotmail.com\"> <img src=\"images/social/emailicon.png\" style=\"width: 55px;height: auto\"></a> </aside> <div class=\"container\"> <div ng-view=\"\"></div> </div> <div class=\"sect sectONE\"> </div> <div class=\"subsection\"> <ul class=\"specialwords\"> <li> <p class=\"specialword1\">Special Word: <strong>YUGE</strong> <br> <br> A variation of the word HUGE commonly used by Donald Trump. <br> <br> ....Hey Don, are you building that tower across 5th Avenue? <br> <br> ....Donald Trump: Yes, it's going to be YUGE!! <br> <br> <!-- <p class=\"specialword2\">Special Word:      \n" +
    "  <strong>YUGE</strong>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "    \n" +
    "  A variation of the word HUGE commonly used by Donald Trump.\n" +
    "    \n" +
    "  <br>\n" +
    "  <br>  \n" +
    "  ....Hey Don, are you building that tower across 5th Avenue? \n" +
    "    \n" +
    "  <br>\n" +
    "  <br>  \n" +
    "  ....Donald Trump: Yes, it's going to be YUGE!!\n" +
    "    \n" +
    "  <br> --> <br> <aside id=\"video\"> <iframe width=\"700px\" height=\"auto\" src=\"https://www.youtube.com/embed/QftAMe__OO4\" frameborder=\"0\" style=\"width:500px; height: auto\" allowfullscreen></iframe> </aside> </p>  </li></ul></div> <div class=\"sect sectTWO\"></div> <div class=\"subsection\"> <br><br> <div id=\"form\"> <div class=\"subscribe\"> <p class=\"subscribenow\">Subscribe to our site!</p> <form class=\"registration\" method=\"get\" action=\"views/thankyou.html\" onsubmit=\"return validate ('registration', 'email')\"> <p> <label class=\"name\"> Your Name <span> (required, atleast 2 characters) </span></label> <br> <input id=\"namebox\" class=\"namebox\" minlength=\"2\" maxlength=\"128\" type=\"text\" placeholder=\" Your Name\" required> </p>  <p> <label class=\"email\"> Your Email <span> (valid email required) </span></label> <br> <input class=\"emailbox\" name=\"email\" minlength=\"@\" maxlength=\"28\" type=\"text\" placeholder=\" Enter your email\" required> <br> <input class=\"submit\" type=\"submit\" value=\"submit\"> <br> </p> <!--  <div id=\"widgetmain\" style=\"text-align:left;overflow-y:auto;overflow-x:hidden;width:300px;background-color:#CCE3A3; border:1px solid #333132;\"><div id=\"rsswidget\" style=\"height:150px;\"><iframe src=\"http://us1.rssfeedwidget.com/getrss.php?time=1457047980139&amp;x=http%3A%2F%2Frss.cnn.com%2Frss%2Fcnn_topstories.rss&amp;w=300&amp;h=150&amp;bc=333132&amp;bw=1&amp;bgc=CCE3A3&amp;m=20&amp;it=true&amp;t=CNN News live&amp;tc=333333&amp;ts=15&amp;tb=transparent&amp;il=true&amp;lc=0000FF&amp;ls=14&amp;lb=false&amp;id=true&amp;dc=333333&amp;ds=14&amp;idt=true&amp;dtc=284F2D&amp;dts=12\" border=\"0\" hspace=\"0\" vspace=\"0\" frameborder=\"no\" marginwidth=\"0\" marginheight=\"0\" style=\"border:0; padding:0; margin:0; width:300px; height:150px;\" id=\"rssOutput\">Reading RSS Feed ...</iframe></div><div style=\"text-align:right;margin-bottom:0;border-top:1px solid #333132;\" id=\"widgetbottom\"><span style=\"font-size:70%\"><a href=\"http://www.rssfeedwidget.com\">rss feed widget</a>&nbsp;</span><br></div></div> --> <!--<button class=\"register\">Register</button> --> </form> </div> </div> </div>   <div class=\"sect sectTHREE\"></div> <div class=\"subsection\"> <a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/search?q=WhatTheFFacts%20\" data-widget-id=\"692891429878693888\">Tweets about WhatTheFFacts </a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script> </div> <div class=\"sect sectFOUR\"></div> <div class=\"subsection\"> <div class=\"visitus\"> <p> <b>Come visit us!<b> </b></b></p> </div> <a id=\"bottom\"></a> <a name=\"location\"></a> <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.8031808435917!2d-122.35640368436535!3d47.7270689791928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490113272b0c467%3A0x102fa7323b76063e!2s13426+Greenwood+Ave+N%2C+Seattle%2C+WA+98133!5e0!3m2!1sen!2sus!4v1454039442993\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe> </div>   <!-- <div class=\"container\">\n" +
    "    <div ng-view=\"\"></div>\n" +
    "    </div> --> <div> <p class=\"copyright\">&copy Marictionary</p> <p class=\"credit\">credit to urbandictionary.com</p> </div> <div class=\"footer\" name=\"footer\"> <a href=\"index.html\" class=\"backtotop\">Back to top</a> <a name=\"footer\"></a> <!-- Google Analytics: change UA-XXXXX-X to be your site's ID\n" +
    "     <script>\n" +
    "       !function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){\n" +
    "       (A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),\n" +
    "       r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)\n" +
    "       }(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n" +
    "\n" +
    "       ga('create', 'UA-XXXXX-X');\n" +
    "       ga('send', 'pageview');\n" +
    "    </script>\n" +
    "\n" +
    "    <!-- build:js(.) scripts/vendor.js\n" +
    "    <!-- bower:js --> <script src=\"bower_components/jquery/dist/jquery.js\"></script> <script src=\"bower_components/angular/angular.js\"></script> <script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js\"></script> <script src=\"bower_components/angular-animate/angular-animate.js\"></script> <script src=\"bower_components/angular-aria/angular-aria.js\"></script> <script src=\"bower_components/angular-cookies/angular-cookies.js\"></script> <script src=\"bower_components/angular-messages/angular-messages.js\"></script> <script src=\"bower_components/angular-resource/angular-resource.js\"></script> <script src=\"bower_components/angular-route/angular-route.js\"></script> <script src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script> <script src=\"bower_components/angular-touch/angular-touch.js\"></script> <script src=\"bower_components/ngstorage/ngStorage.js\"></script> <!-- endbower --> <!-- endbuild --> <!-- build:js({.tmp,app}) scripts/scripts.js --> <script src=\"scripts/app.js\"></script> <script src=\"scripts/controllers/main.js\"></script> <script src=\"scripts/controllers/about.js\"></script> <script src=\"scripts/services/wordSearch.js\"></script> <script src=\"scripts/controllers/savedWords.js\"></script> <!-- endbuild --> </div></body> </html>"
  );


  $templateCache.put('views/main.html',
    "<div> <label class=\"wordlookup\">Look up.... <!-- <input type=\"text\" name=\"word\" method=\"get\" minlength=\"2\" ng-model=\"word\" placeholder=\"What's the Word?\" required></input> --> <input type=\"text\" ng-model=\"word\" placeholder=\"What's the Word?\"> <a class=\"clear\" ng-click=\"word = null\"> <span class=\"glyphicon glyphicon-remove\"></span> </a> <button class=\"lookupbutton\" ng-click=\"findWords()\">Look it up!</button> </label> </div> <div> <label class=\"wordlookup\">Look up.... <input type=\"text\" ng-model=\"word\" placeholder=\"What's the Word?\"> <a class=\"clear\" ng-click=\"word = null\"> <span class=\"glyphicon glyphicon-remove\"></span> </a> <button class=\"lookupbutton\" ng-click=\"findWords()\">Look it up!</button> </label> </div> <div ng-if=\"searchQuery\"> <p class=\"lead\">{{wordsFound.count}} words found matching the query: {{searchQuery}}. </p> </div> <br> <ul class=\"wordresults\"> <p ng-animate=\"animate\" ng-repeat=\"word in wordsFound.list | limitTo: 5\"> <strong>{{word.word}}</strong> {{list.word}} {{word.definition}} <br> {{word.definition[0].example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} {{word.thumbnail}} <button class=\"saveword\" id=\"btn btn-lg btn-primary\" ng-click=\"saveWord(word)\">Add to favorite words!</button> <a class=\"clear\" ng-click=\"word = null\"> <span class=\"glyphicon glyphicon-remove\"></span> </a> <div ng-if=\"storage.savedWords\"> <h2>Favorite Words</h2> <ul class=\"saved-words-list\"> <li ng-repeat=\"word in storage.savedWords\"> <a ng-href=\"/#/wordSearch/{{word.word}}\" class=\"btn btn-lg btn-primary\">{{word.word}}</a> </li> <p class=\"save-button-container\"> <button class=\"btn btn-xs btn-default\" ng-click=\"unsaveWord(word)\">Unsave</button></p> </ul> </div></p></ul>"
  );


  $templateCache.put('views/savedwords.html',
    "<div> <ul class=\"savedwordresults\"> <div> <a href=\"#/index.html\" class=\"backtosearch\">Back to Search </a> </div> <br> <br> <li ng-repeat=\"word in storage.savedWords | limitTo: 10\"> <strong>{{word.word}}</strong> {{word.word}} {{word.definition}} <br> {{word.definition.example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} {{word.thumbnail}} <br> </li></ul> </div>"
  );


  $templateCache.put('views/thankyou.html',
    "<div class=\"thankyou\"></div> <div> <link rel=\"stylesheet\" href=\"styles/main.css\"> <p> Thank you for subscribing to our email list</p> <iframe src=\"//giphy.com/embed/3oEduUi298ZCWdnPKU\" width=\"480\" height=\"319\" frameborder=\"0\" class=\"giphy-embed\" allowfullscreen></iframe><p><a href=\"http://giphy.com/gifs/manrepeller-3oEduUi298ZCWdnPKU\"></a></p> <a href=\"../index.html\" class=\"returnhome\">Back to home page </a> </div>"
  );

}]);
