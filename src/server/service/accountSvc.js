module.exports = function(AccountModel) {

  var Account = AccountModel;

  var AccountSvc = {
    findById : findById
  }
  
  return AccountSvc;

  function findById(id) {

    console.log('Account findById called with param: ', arguments);

    return Account.where('acc_id', id)
      .fetch({withRelated: ['customer']});
  }

}