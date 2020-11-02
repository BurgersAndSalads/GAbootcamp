const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products');

router.get('/', productsCtrl.anon);

module.exports = router;
