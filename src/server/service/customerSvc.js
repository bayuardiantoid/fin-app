module.exports = function(CustomerModel) {

  var Customer = CustomerModel;

  var CustomerSvc = {
    findAll : findAll,
    findById : findById,
    getAllAccounts : getAllAccounts
  }
  
  return CustomerSvc;

  function findAll(page, pageSize) {

    console.log('Customer findAll called with param: ', arguments);

    return Customer
      .fetchAll();
      //.fetchPage({page: page, pageSize: pageSize});
  }


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