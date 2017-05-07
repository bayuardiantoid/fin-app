require('./helper/route-helper');
require('./helper/route-helper.provider');

require('./core/core.module');
require('./core/config');
require('./core/core.route');
require('./core/core.controller');




(() => {

    module.exports = angular.module('app', [
        'app.core'
    ]);

})();