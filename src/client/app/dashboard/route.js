(
  function() {
    angular.module('app.dashboard')
      .run([ 'routeHelper',
          function (routeHelper) {

        console.log('Dashboard Run called');
        
        routeHelper.addStates([
          {
            name: '$.dashboard',
            config: {
              url: 'dashboard',
              views: {
                'app@$': {
                  templateUrl: 'app/dashboard/tpl.html',
                  controller: 'DashboardCtrl as vm'
                }
              },
              title: 'Dashboard',
              settings: {
                template: '<strong>Dashboard</strong>'
              }
            }
          }
        ]);
        
      }]);
  }
)();