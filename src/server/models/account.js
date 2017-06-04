//var CustomerModel = require('./customer');

module.exports = function(bookshelf, CustomerModel) {

    var AccountModel = bookshelf.model('Account', {
        tableName: 'accounts',
        idAttribute: 'acc_id',
        customer: function() {
            return this.belongsTo('Customer', 'acc_cust_id');
        }

    }); 

    return AccountModel;
};