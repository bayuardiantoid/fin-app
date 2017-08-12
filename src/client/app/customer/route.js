(
  function() {
    module.exports = angular.module('app.customer')
      .run([ 'routeHelper',
          function (routeHelper) {

        console.log('Customer Run called');
        
        routeHelper.addStates([
          {
            name: '$.customer',
            config: {
              url: 'customer',
              views: {
                'app@$': {
                  templateUrl: 'app/customer/view.tpl.html',
                  controller: 'CustomerViewCtrl as cs'
                }
              },
              title: 'Customer',
              settings: {
                template: '<i>Customer</i>'
              }
            }
          }
        ]);
        
      }]);
  }
)();