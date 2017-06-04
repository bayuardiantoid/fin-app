(

  () => {
    'use strict';

    angular.module('route.helper')
      .provider('routeHelper', ['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function ($locationProvider, $stateProvider, $urlRouterProvider) {
          $locationProvider.html5Mode(true);

          this.$get = ['$location', '$state', '$rootScope',
            function ($location, $state, $rootScope) {

              return {
                hasOtherwise: false,
                addStates: function (states, otherwise) {

                  states.forEach(function (state) {
                    $stateProvider.state(state.name, state.config);
                  });

                  if (!this.hasOtherwise && otherwise) {
                    $urlRouterProvider.otherwise(otherwise);
                    this.hasOtherwise = true;
                  }

                },
                listenEvent: function (scope, urlRouter) {
                  scope.$on(
                      '$locationChangeStart',
                      function (event, a, b) {
                        console.log('$locationChangeStart. a,b : \n', a, b);
                        $rootScope.title = a.title;
                    });

                  scope.$on(
                      '$locationChangeSuccess',
                      function (event, a, b) {
                        console.log('$locationChangeSuccess. a,b : \n', a, b);
                        
                    });
                  

                  scope.$on(
                      '$stateChangeStart',
                      function (event, toState, toParams, fromState, fromParams) {
                        console.log('$stateChangeStart to '+ toState.name+ '. toState,toParams : \n',
                          toState,toParams);
                    });

                  scope.$on(
                      '$stateChangeSuccess',
                      function (event, toState, toParams, fromState, fromParams) {
                        console.log('$stateChangeSuccess to '+ toState.name+ '. toState,toParams : \n',
                          toState,toParams);
                    })


                  urlRouter.listen();
                }
              };
            }];

        }]);
  })();