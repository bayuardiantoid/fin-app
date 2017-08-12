var router = require('express').Router();

var mysql = require('mysql');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123.',
    database: 'findb',
    charset: 'utf8'
  },
  debug: true
});

var bookshelf = require('bookshelf')(knex);

var jwt = require('jsonwebtoken');

var four0four = require('../utils/404')();

var models = require('../models')(bookshelf);

var authCtrl = require('../controller/authCtrl')(models, jwt);

var customerCtrl = require('../controller/customerCtrl')(models);

var accountCtrl = require('../controller/accountCtrl')(models);

var messagingCtrl = require('../controller/messagingCtrl')();

router.get('/auth', authCtrl.authenticate);

router.get('/customer/', customerCtrl.getAll);

router.get('/customer/:custId', customerCtrl.getById);

router.get('/customer/:custId/account', customerCtrl.getAllCustomerAccounts);

router.get('/account/:accId', accountCtrl.getById);

router.post('/sendmsg/:tn/:msg', messagingCtrl.sendMessage);

router.get('/*', four0four.notFoundMiddleware);



module.exports = router;

