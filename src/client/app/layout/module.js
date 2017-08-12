(function() {
    'use strict';
    module.exports = angular.module('app.layout', [
      'ui.router',
      'route.helper',
      'ngMaterial',
      'ngAria',
      'angular-loading-bar'
    ]).config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('lime') 
      .warnPalette('orange');
    });

  }
)();