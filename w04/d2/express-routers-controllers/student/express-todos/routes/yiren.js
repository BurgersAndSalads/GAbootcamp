var express = require('express');
const { route } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('<h1>yiren</h1>');
})
  
module.exports = router;
