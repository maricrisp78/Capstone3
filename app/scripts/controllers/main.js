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

  });

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