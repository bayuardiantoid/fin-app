(function() {
  'use strict';

  module.exports = angular.module('app.layout')
    .component('aqSidebar', {
      templateUrl: 'app/layout/sidebar-comp.html',
      controller: AqSidebarCtrl,
      controllerAs: '$ctrl',
      bindings: {
        items: '=',
      },
    });

  AqSidebarCtrl.$inject = ['$scope'];
  function AqSidebarCtrl($scope) {
    var $ctrl = this;
    

    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestroy = function() { };
  }
})();