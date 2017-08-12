module.exports = function(models) {

  var service = require('../service/customerSvc')(models.Customer);

  var controller = {
    getAll : getAll,
    getById : getById,
    getAllCustomerAccounts: getAllCustomerAccounts
  };

  return controller;

  function getAll(req, res, next) {
    
    var page = req.params.page || 1;
    var pageSize = req.params.pageSize || 10;
    var response = {};

    console.log("page : " + page + " pageSize : " + pageSize);

    service.findAll(page, pageSize)
      .then(function(customer) {
        response = {
          status : 200,
          message : 'OK',
          result : customer
        };
        res.status(200).send(response);
      }).catch(function(error){
        res.status(500).send(error);
      });
    //res.status(200).send("OK");
  };


  
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