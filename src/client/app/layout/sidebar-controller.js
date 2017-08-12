(function() {
  'use strict';

  module.exports = angular.module('app.layout')
    .controller('SidebarCtrl', SidebarCtrl);

  SidebarCtrl.$inject = ['$state', '$sce'];
  function SidebarCtrl($state, $sce) {
    var sb = this;
    
    sb.getRoutes = function() {
      var routes =  $state.get();

      var ret = routes.filter(function(r){
        return r.settings;
      });


      console.log("return", ret);

      return ret;
    };


    sb.getTrustedHtml = function(html) {
      return $sce.trustAsHtml(html);
    };
  }
})();