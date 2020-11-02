const express = require('express');
const router = express.Router();
const contactsC = require('../controllers/contacts');

router.get('/', contactsC.form);
router.post('/handle_submit', contactsC.thank);

module.exports = router;