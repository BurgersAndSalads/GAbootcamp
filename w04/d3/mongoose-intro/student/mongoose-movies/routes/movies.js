const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
  

// GET /movies/index
router.get('/index', moviesCtrl.index);
// GET /movies/new
router.get('/new', moviesCtrl.new);

router.post('/', moviesCtrl.create);




module.exports = router;