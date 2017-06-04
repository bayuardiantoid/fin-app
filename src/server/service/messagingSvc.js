module.exports = function() {

  var messagingService = {
    send : send
  };

  return messagingService;


  function send(tn, msg) {
    console.log('Sending message to no: ' + tn + ' with message: "' + msg +  '"');

    return new Promise(function(resolve, reject) {
      resolve("success");
    });
  }

}