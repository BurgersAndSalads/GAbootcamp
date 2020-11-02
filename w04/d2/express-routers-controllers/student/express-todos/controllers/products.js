const productsD = require('../models/products')

function anon(req, res, next) {
    res.render('review', productsD.stuff);
}



module.exports = {anon};