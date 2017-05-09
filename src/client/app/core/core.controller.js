(() => {
	angular.module('app.core')
		.controller('CoreCtrl', ['$scope', function ($scope) {
			console.log('Core Controller called');
			this.who = ', World';

			this.haloClicked = function () {
				console.log("clicked hallo");
			};

		}]);
})();