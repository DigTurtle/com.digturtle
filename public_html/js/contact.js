/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
  ie 9+
  using 1.3
*/
var myApp = angular.module("myApp",[]);

myApp.controller("formCtrl",["$scope", function($scope){
  
  $scope.submitForm = function(){
    if($scope.form.$valid){
      alert("Form Submitted!");
    }
  };
  
}]);
