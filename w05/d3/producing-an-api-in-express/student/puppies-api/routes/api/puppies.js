const puppiesCtrl = require('../../controllers/api/puppies');
const express = require('express');
const router = express.Router();

router.get('/index', puppiesCtrl.index);
router.get('/show', puppiesCtrl.show);
router.get('/create', puppiesCtrl.create);
router.get('/update', puppiesCtrl.update);
router.get('/delete', puppiesCtrl.delete);

module.exports = router;