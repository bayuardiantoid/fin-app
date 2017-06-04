//var AccountModel = require('./account');

module.exports = function(bookshelf, AccountModel) {
    var CustomerModel = bookshelf.model('Customer', {
        tableName: 'customers',
        idAttribute: 'cust_id', 
        accounts: function() {
            return this.hasMany('Account', 'acc_cust_id');
        }
    }, {

    }); 
    return CustomerModel;
};