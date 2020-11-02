const productsD = require('../models/products');

function newProducts(req, res) {
    res.render('products/new');
}

function create(req, res) {
    console.log(req.body);
    const product = new productsD(req.body);
    console.log(product);
    product.save(function(err) {
      if (err) return res.render('products/new');
      res.redirect('/products/index');
    });
}
function index(req, res) {
    productsD.find({}, function(err, product) {
        res.render('products/index', {product});
    })
}

module.exports = {
    new: newProducts,
    create,
    index
}