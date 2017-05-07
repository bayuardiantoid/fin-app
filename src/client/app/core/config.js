(
  () => {
    angular.module('app.core')
    .config([ '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function ($locationProvider, $stateProvider, $urlRouterProvider) {
          console.log('Core config called');

          $locationProvider.html5Mode(true);


          $stateProvider.state('app',
            {
              url: '/',
              views: {
                '@': {
                  controller: 'CoreCtrl as cc',
                  templateUrl: './app/core/core.html'
                }
              }

            });
          $urlRouterProvider
            .otherwise('/');

        }]);
  }
)();