module.exports = function() {

  var service = require('../service/messagingSvc')();

  var controller = {
    sendMessage: sendMessage
  };

  return controller;

  function sendMessage(req, res, next) {

    var terminatingNo = req.params.tn;
    var message = req.params.msg;

    service.send(terminatingNo, message)
    .then(function(msg) {
      res.status(200).send('Message sent');
    });
    
  };
  
}