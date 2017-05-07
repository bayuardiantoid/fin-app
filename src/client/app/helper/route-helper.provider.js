(() => {
  'use strict';
  angular.module('route.helper')
    .provider('routeHelper', function() {
        this.$get = ['$locationProvider', '$stateProvider', '$urlRouterProvider',
          function ($locationProvider, $stateProvider, $urlRouterProvider) {
            
        }];

      });

})();