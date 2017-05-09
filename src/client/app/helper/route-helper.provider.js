(

  () => {
    'use strict';

    angular.module('route.helper')
      .provider('routeHelper', ['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function ($locationProvider, $stateProvider, $urlRouterProvider) {

          $locationProvider.html5Mode(true);

          this.$get = ['$location', '$state',
            function ($location, $state) {

              return {
                hasOtherwise : false,
                addStates : function (states, otherwise) {

                  states.forEach(function (state) {
                    $stateProvider.state(state.name, state.config);
                  });

                  if (!this.hasOtherwise && otherwise) {
                    $urlRouterProvider.otherwise(otherwise);
                  }

                }
              };
            }];

        }]);
  })();