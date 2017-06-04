(function () {
	'use strict';
	angular.module('app.core')
		.controller('CoreCtrl', ['$scope', '$rootScope',
		 function ($scope, $rootScope) {
			console.log('Core Controller called');
			
			$rootScope.title = "Aseng";
		}]);
})();