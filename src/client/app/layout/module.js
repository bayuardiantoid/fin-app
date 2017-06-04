(function() {
    'use strict';
    module.exports = angular.module('app.layout', [
      'ui.router',
      'route.helper',
      'ngMaterial',
      'ngAria'
    ]).config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('lime') 
      .warnPalette('orange');
    });

  }
)();