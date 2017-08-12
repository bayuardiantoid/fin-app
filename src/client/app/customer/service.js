(function () {
  module.exports = angular.module('app.customer')
    .factory('CustomerSvc', ['$resource', '$http',
      function ($resource, $http) {
        return {
          findAll: function (params) {

            var res = $resource('/api/customer', {}, {
															query : {
																method : 'GET',
																timeout : 60000,
																cache : false,
																isArray : false,
																transformResponse : [ function(
																		data,
																		headersGetter) {
																	return data;
																} ]
																		.concat($http.defaults.transformResponse)
															}
														});
            return res.query(params);
          },
          findById: function (params) {

            var res = $resource('/api/customer/:customerId', {}, {
															query : {
																method : 'GET',
																timeout : 60000,
																cache : false,
																isArray : false,
																transformResponse : [ function(
																		data,
																		headersGetter) {
																	return data;
																} ]
																		.concat($http.defaults.transformResponse)
															}
														});
            return res.query(params);
          }
        }
      }]);
})();