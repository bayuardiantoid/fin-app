(
  function() {
    angular.module('app.security')
      .run([ 'routeHelper',
          function (routeHelper) {

        console.log('Security Run called');
        
        routeHelper.addStates([
          {
            name: 'signin',
            config: {
              url: '/signin',
              templateUrl: 'app/security/signin.html',
              controller: 'SignInCtrl',
              title: 'app'
            }
          },
          {
            name: 'signout',
            config: {
              url: '/signout',
              templateUrl: 'app/signout/signout.html',
              controller: 'SignOutCtrl',
              title: 'Not Found'
            }
          }
        ], '/404');
        
      }]);
  }
)();