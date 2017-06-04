module.exports = function(models) {
  var service = require('../service/accountSvc')(models.Account);

  var controller = {
    getById : getById
  };

  return controller;
  
  function getById(req, res, next) {

    
    var accId = req.params.accId;

    console.log("AccountId : " + accId);

    service.findById(accId)
      .then(function(account) {
        res.status(200).send(account);
      }).catch(function(error){
        res.status(500).send("Error:" + error);
      });
    
  }
  
}