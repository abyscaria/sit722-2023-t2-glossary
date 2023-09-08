var express = require('express');
var router = express.Router();

const glossary = require('./glossaryData'); // importing glossary data


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub: 'Welcome to my Website showing a collection of DevOps Terms and brief description', glossary:glossary });
});

module.exports = router;
