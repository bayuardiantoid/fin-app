module.exports = function(CustomerModel) {

  var Customer = CustomerModel;

  var CustomerSvc = {
    findById : findById,
    getAllAccounts : getAllAccounts
  }
  
  return CustomerSvc;

  function findById(id) {

    console.log('Customer findById called with param: ', arguments);

    return Customer.where('cust_id', id)
      .fetch();
  }

  function getAllAccounts(id) {
    console.log('Customer getAllAccounts called with param: ', arguments);

    return Customer.where('cust_id', id)
      .fetch({ withRelated: ['accounts']});
  }
}