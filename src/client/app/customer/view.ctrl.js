(function () {
	module.exports = angular.module('app.customer')
		.controller('CustomerViewCtrl', ['$scope', 'CustomerSvc',
			function ($scope, CustomerSvc) {
				console.log('Customer Controller called');


				var vm = this;
				vm.customers = null;

				console.log("CustomerSvc", CustomerSvc);

				vm.resp = CustomerSvc.findAll();

				console.log("this outer : ", vm);
				vm.resp.$promise.then(function (response) {
					console.log("this inner: ", vm);
					vm.customers = vm.resp.result;
				}, function (err) {
					
				});


			}]);
})();