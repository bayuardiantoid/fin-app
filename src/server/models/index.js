module.exports = function(bookshelf) {

  bookshelf.plugin('registry');
  
  var UserModel = require("./user")(bookshelf)
  var AccountModel = require("./account")(bookshelf, CustomerModel)
  var CustomerModel = require("./customer")(bookshelf, AccountModel)


  var models = {
    User: UserModel,
    Customer: CustomerModel,
    Account: AccountModel
  };


  return models;

  
};
