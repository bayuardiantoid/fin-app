(
  function() {
    angular.module('app.dashboard')
      .run([ 'routeHelper',
          function (routeHelper) {

        console.log('Dashboard Run called');
        
        routeHelper.addStates([
          {
            name: 'ws.dashboard',
            config: {
              view: {
                url: '/dashboard',
                templateUrl: 'app/dashboard/tpl.html',
                title: 'dashboard'
              }
            }
          }
        ], '/404');
        
      }]);
  }
)();