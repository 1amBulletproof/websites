(function() {
  'use strict';

  angular.module('App', [])
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$timeout'];

  function AppController($scope, $timeout ) {

    $scope.hideStatus = true;

    $scope.showHiddenContent = function() {
      console.log("show meme");
      $scope.hideStatus = false
      $timeout(function () { console.log("showing description/details");}, 5000);
    }

  };

})();
