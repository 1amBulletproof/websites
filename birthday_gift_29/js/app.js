(function() {
  'use strict';

  angular.module('App', [])
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$timeout'];

  function AppController($scope, $timeout ) {
    var cntrl = this
    cntrl.hideImageStatus = false;
    cntrl.hideMessage = false;

    cntrl.showHiddenContent = function() {
      console.log("show meme");
      cntrl.hideImageStatus = true
      $timeout(function () {
        console.log("showing description/details");
        cntrl.hideMessage = true;
      }, 3000);
    }



  };

})();
