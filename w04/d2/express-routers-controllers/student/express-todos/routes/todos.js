const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

router.get('/apple', todosCtrl.index);

module.exports = router;


