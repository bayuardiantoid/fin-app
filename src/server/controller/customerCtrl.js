module.exports = function(models) {

  var service = require('../service/customerSvc')(models.Customer);

  var controller = {
    getById : getById,
    getAllCustomerAccounts: getAllCustomerAccounts
  };

  return controller;
  
  function getById(req, res, next) {

    
    
    var custId = req.params.custId;

    console.log("CustomerId : " + custId);

    service.findById(custId)
      .then(function(customer) {
        res.status(200).send(customer);
      }).catch(function(error){
        res.status(500).send(error);
      });
    
  };

  function getAllCustomerAccounts(req, res, next) {

    
    
    var custId = req.params.custId;

    console.log("CustomerId : " + custId);

    service.getAllAccounts(custId)
      .then(function(customer) {
        res.status(200).send(customer);
      }).catch(function(error){
        res.status(500).send(error);
      });
    
  };
  
}