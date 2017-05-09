require('./helper/route-helper');
require('./helper/route-helper.provider');


require('./core/core.module');
require('./core/config');
require('./core/core.route');
require('./core/core.controller');


require('./security/security.module');
require('./security/security.route');
require('./security/security.controller');



(() => {

    module.exports = angular.module('app', [
        'app.core',
        'app.security'
    ]);

})();