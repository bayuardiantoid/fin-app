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
  }
});

var bookshelf = require('bookshelf')(knex);

var jwt = require('jsonwebtoken');

var four0four = require('../utils/404')();

var models = require('../models')(bookshelf);

var auth = require('../api/authentication')(models, jwt);

router.get('/auth', auth.authenticate);



router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

