(function() {
  'use strict';

  module.exports = angular.module('app.layout')
    .component('faToolbar', {
      templateUrl: 'app/layout/toolbar.html',
      controller: FaToolbarCtrl,
      controllerAs: '$ctrl',
      transclude: true,
      bindings: {
        items: '=',
      },
    });

  FaToolbarCtrl.$inject = ['$scope'];
  function FaToolbarCtrl($scope) {
    var $ctrl = this;
    

    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestroy = function() { };
  }
})();