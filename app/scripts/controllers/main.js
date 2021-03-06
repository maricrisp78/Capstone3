'use strict';

/**
 * @ngdoc function
 * @name Capstone3.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Capstone3
 */




angular.module('Capstone3')
  .controller('MainCtrl', function ($scope, wordSearch, $localStorage) {


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

  });


