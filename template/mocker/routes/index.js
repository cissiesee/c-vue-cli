var express = require('express');
var common = require('./common');
var module1 = require('./module1');
var router = express.Router();

/* GET/POST other page. */
router.get('/common', common);
router.get('/module1', module1);

module.exports = router;