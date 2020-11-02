const express = require('express');
const router = express.Router();
const productsC = require('../controllers/products');
const products = require('../models/products');

router.get('/new', productsC.new)
router.get('/index', productsC.index)
router.post('/', productsC.create);

module.exports = router;