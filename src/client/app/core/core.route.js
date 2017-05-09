(
  function() {
    angular.module('app.core')
      .run([ 'routeHelper',
          function (routeHelper) {

        console.log('Core Run called');
        
        routeHelper.addStates([
          {
            name: 'app',
            config: {
              url: '/',
              templateUrl: 'app/core/core.html',
              title: 'app'
            }
          },
          {
            name: '404',
            config: {
              url: '/404',
              templateUrl: 'app/core/404.html',
              title: 'Not Found'
            }
          }
        ], '/404');
        
      }]);
  }
)();