(function ()  {
	angular.module('app.dashboard')
		.controller('DashboardCtrl', ['$scope', function ($scope) {
			console.log('Dashboard Controller called');
			this.who = ', World';

			this.haloClicked = function () {
				console.log("clicked hallo");
			};

		}]);
})();