"use strict";angular.module("Capstone3",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/savedWords",{templateUrl:"views/savedwords.html",controller:"SavedwordsCtrl",controllerAs:"savedWords"}).when("/savedWords",{templateUrl:"views/savedwords.html",controller:"SavedwordsCtrl",controllerAs:"savedWords"}).otherwise({redirectTo:"/"})}]),angular.module("Capstone3").controller("MainCtrl",["$scope","wordSearch","$localStorage",function(a,b,c){a.findWords=function(){console.log("clicking here"),a.wordsFound=b.find({query:a.word})},a.saveWord=function(a){if(c.savedWords){for(var b=!0,d=0;d<c.savedWords.length;d++)c.savedWords[d].unique_id===a.unique_id&&(b=!1);b===!0?c.savedWords.push(a):console.log("word already saved")}else c.savedWords=[],c.savedWords.push(a)}}]),$(function(){$(".menu-trigger").click(function(){$(".navbar").slideToggle(400,function(){$(this).toggleClass("nav-expanded").css("display","")})})}),angular.module("Capstone3").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("Capstone3").factory("wordSearch",["$resource",function(a){return a("https://mashape-community-urban-dictionary.p.mashape.com/define?term=:query",{},{find:{method:"GET",headers:{"X-Mashape-Key":"zEe48mTpJumshw1QLLrbFi4g6huSp1AoAgBjsnsYqmtxr90Wqm"},params:{query:""},isArray:!1}})}]),angular.module("Capstone3").controller("SavedwordsCtrl",["$scope","$localStorage",function(a,b){a.storage=b}]),angular.module("projectsApp").run(["$templateCache",function(a){a.put("views/about.html",'<p class="about"><strong>About Marictionary:</strong> <br> <div> <ul class="aboutnav navbar-nav"> <li class="aboutnav"><a href="../index.html" class="returnhome">Back to home page </a></li> <li class="active"><a ng-href="#/about">About</a></li> </ul> </div> <br> <br> <br> <br> Marictionary is a derivative of Urban Dictionary. Here\'s a little about Urban Dictionary.... Urban Dictionary is a satirical crowdsourced online dictionary of slang words and phrases that was founded in 1999 as a parody of Dictionary.com by then-college freshman Aaron Peck. Some of the definitions on the website can be found as early as 2001, however most early definitions are from 2003. At the start of 2014, the dictionary featured over seven million definitions, while 2,000 new daily entries were being added. In November 2014, the Advertise page of the website states that, on a monthly basis, Urban Dictionary averages 72 million impressions and 18 million unique readers. Anyone with either a Facebook or Gmail account can make a submission to the dictionary, and it is claimed that all entries are reviewed by volunteers. Site visitors may agree/disagree with definitions by an up/down vote system. <br> <h3>History</h3> 1999–2003: Founding, UK high court case, Advertising The site was founded in 1999 by Peckham while he was a freshman computer science major at California Polytechnic State University, San Luis Obispo (Cal Poly). Peckham had previously created a spoof version of the Ask Jeeves web search engine while studying at Cal Poly but closed the website after he received an infringement letter. During the "Internet Underground" panel of the 2011 ROFLCon Summit, Peckham explained that, as a computer science student, his primary motivation was to construct a website; but he was also dissatisfied with the conventional English-language dictionary, as it "was telling us how English was spoken, instead of reflecting how English was actually spoken." For the launch of Urban Dictionary, Peckham installed the website on a FileMaker Pro web server that was operated from under his dormitory room bed at Cal Poly. One of the first definitions on the site was "O.G.", defined as "a retired gangster who sits on the porch in the ghetto and preaches to the youngsters". For the first four years, the site generated revenue without making a profit for Peckham, but did not incur any costs,[dubious – discuss] so Peckham\'s role was mostly passive. In 2003,[5] Peckham paid more attention to the site after a news article revealed that United Kingdom (UK) high court judges had used Urban Dictionary to assist them in a case involving two rappers (the judges unsuccessfully attempted to comprehend slang language that the rappers used). According to Peckham in 2011, the site first displayed advertising around 2004. Peckham explained that advertising networks connect companies to Urban Dictionary.</p>'),a.put("views/main.html",'<div> <label class="wordlookup">Look up.... <input type="text" name="word" method="get" minlength="2" ng-model="word" placeholder="What\'s the Word?" required> <button class="lookupbutton" ng-click="findWords()">Look it up!</button> </label> </div> <div ng-if="searchQuery"> <p class="lead">{{wordsFound.count}} words found matching the query: {{searchQuery}}. </p> </div> <br> <!-- {{wordsFound.list[0].definition}} --> <div class="wordresults"> <p ng-animate="\'animate\'" ng-repeat="word in wordsFound.list | limitTo: 5"> <strong>{{word.word}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} {{word.thumbnail}} <button class="saveword" id="btn btn-lg btn-primary" ng-click="saveWord(word)">Add to favorite words!</button> </p><p> <a href="#/savedWords" class="savedWords" id="btn btn-lg btn-primary">Favorite Words</a> </p> <div ng-if="storage.savedWords"> <h2>Favorite Words</h2> <ul class="saved-words-list"> <li ng-repeat="word in storage.savedWords"> <a ng-href="/#/wordSearch/{{word.word}}" class="btn btn-lg btn-primary">{{word.word}}</a> </li> </ul> </div></div>'),a.put("views/savedwords.html",'<p class="Favorites">Favorite Words</p> <div> <ul class="wordresults"> <li ng-repeat="word in storage.savedWords | limitTo: 15"> <strong>{{word.word}}</strong> | {{word.word}}, {{word.definition}} <br> {{word.definition[0].example}} {{word.word[0].thumbsup}} <br> {{word.word[0].thumbsdown}} {{word.thumbnail}} <br> </li></ul> <a href="#/index.html" class="backtosearch">Back to Search </a> </div>'),a.put("views/thankyou.html",'<div> <link rel="stylesheet" href="styles/main.css"> <p> Thank you for subscribing to our email list</p> <iframe src="//giphy.com/embed/3oEduUi298ZCWdnPKU" width="480" height="319" frameborder="0" class="giphy-embed" allowfullscreen></iframe><p><a href="http://giphy.com/gifs/manrepeller-3oEduUi298ZCWdnPKU"></a></p> <a href="../index.html" class="returnhome">Back to home page </a> </div>')}]);