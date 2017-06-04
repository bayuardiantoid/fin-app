(function() {
  'use strict';

  angular.module('app.layout')
    .component('faSidebar', {
      templateUrl: 'app/layout/sidebar.html',
      controller: FaSidebarCtrl,
      controllerAs: '$ctrl',
      bindings: {
        items: '=',
      },
    });

  FaSidebarCtrl.$inject = ['$scope'];
  function FaSidebarCtrl($scope) {
    var $ctrl = this;
    

    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestroy = function() { };
  }
})();