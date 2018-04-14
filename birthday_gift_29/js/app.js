(function() {
  'use strict';

  angular.module('App', [])
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$timeout'];

  function AppController($scope, $timeout ) {
    var cntrl = this
    cntrl.hideImageStatus = true;
    cntrl.hideMessage = true;

    cntrl.showHiddenContent = function() {
      console.log("show meme");
      cntrl.hideImageStatus = false
      $timeout(function () {
        console.log("showing description/details");
        cntrl.hideMessage = false;
      }, 3000);
    }



  };

})();
