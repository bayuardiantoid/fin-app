(function () {
    'use strict';
    angular.module('app.core')
    .config(['routeHelperProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', 
        function (routeHelperProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
          
          console.log('Route initialized by routeHelperProvider');          

        }]);
  }
)();