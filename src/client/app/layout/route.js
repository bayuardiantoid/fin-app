(function () {
  'use strict';
  angular.module('app.layout')
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
                  template: '<div ui-view="ws"></div>',
                }
              }
            }
          },
          {
            name: '$.main',
            config: {
              url: 'main',
              views: {
                'ws@$': {
                  templateUrl: 'app/layout/main.html',
                  controller: 'LayoutCtrl as vm',
                  title: 'core'
                }
              }
            }
          }
        ], '/main');

      }]);
}
)();