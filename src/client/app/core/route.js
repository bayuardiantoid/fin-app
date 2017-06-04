(function() {
    'use strict';
    angular.module('app.core')
      .run([ 'routeHelper', '$rootScope', '$urlRouter',
          function (routeHelper, $rootScope, $urlRouter) {

        console.log('Core Run called');

        $rootScope.title = "Core";
        
        routeHelper.addStates([
          {
            name: '401',
            config: {
              url: '/401',
              templateUrl: 'app/core/401.html',
              title: 'Unauthorized'
            }
          },
          {
            name: '403',
            config: {
              url: '/403',
              templateUrl: 'app/core/403.html',
              title: 'Not Found'
            }
          },
          {
            name: '404',
            config: {
              url: '/404',
              templateUrl: 'app/core/404.html',
              title: 'Forbidden'
            }
          },
          {
            name: 'ngawur',
            config: {
              url: '/ngawur',
              templateUrl: 'app/core/ngawur.html',
              title: 'Forbidden'
            }
          }
          
        ]);
        
        routeHelper.listenEvent($rootScope, $urlRouter)
      }]);
  }
)();