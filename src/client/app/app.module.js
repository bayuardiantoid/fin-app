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
//require('./layout/sidebar');
require('./layout/sidebar-controller');
require('./layout/toolbar');
require('./layout/controller');

require('./dashboard/module');
require('./dashboard/route');
require('./dashboard/controller');

require('./customer/module');
require('./customer/route');
require('./customer/service');
require('./customer/view.ctrl');


(function () {

    module.exports = angular.module('app', [
        'app.core',
        'app.security',
        'app.layout',
        'app.dashboard',
        'app.customer',
    ]);

})();

