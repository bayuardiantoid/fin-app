require('./helper/route-helper');
require('./helper/route-helper.provider');


require('./core/module');
require('./core/config');
require('./core/route');
require('./core/controller');


require('./security/security.module');
require('./security/security.route');
require('./security/security.controller');

require('./layout/module');
require('./layout/route');
require('./layout/sidebar');
require('./layout/toolbar');
require('./layout/controller');


(function () {

    module.exports = angular.module('app', [
        'app.core',
        'app.security',
        'app.layout'
    ]);

})();

