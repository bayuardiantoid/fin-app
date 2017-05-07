(() => {
	angular.module('app.core')
		.controller('CoreCtrl', ['$scope', function ($scope) {
			console.log('Core Controller called');
			this.who = ', World';

			this.halloClicked = function () {
				console.log("clicked hallo");
			};

		}]);
})();