(function() {
  'use strict';

  module.exports = angular.module('app.layout')
    .controller('LayoutCtrl', LayoutCtrl);

  LayoutCtrl.$inject = [];
  function LayoutCtrl() {
    var vm = this;
    

    vm.clicked = function() {
      console.log("clicked");
    }
  }
})();