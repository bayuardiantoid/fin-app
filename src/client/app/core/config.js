(
  () => {
    angular.module('app.core')
    .config(['routeHelperProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', 
        function (routeHelperProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
          
          console.log('Core config called');          

        }]);
  }
)();