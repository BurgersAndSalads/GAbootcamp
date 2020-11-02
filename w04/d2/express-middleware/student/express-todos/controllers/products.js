const productsD = require('../models/products')

function anon(req, res, next) {
    res.render('form', {
        name: productsD.stuff()
    });
}



module.exports = {anon};