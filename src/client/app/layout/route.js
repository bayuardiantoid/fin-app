(function () {
  'use strict';
  module.exports = angular.module('app.layout')
    .run(['routeHelper', '$rootScope', '$urlRouter',
      function (routeHelper, $rootScope, $urlRouter) {

        routeHelper.addStates([
          {
            name: '$',
            config: {
              url: '/',
              abstract: true,
              views: {
                '@': {
                  templateUrl: 'app/layout/main.html'
                }
              }
            }
          } 
        ], '/dashboard');

      }]);
}
)();