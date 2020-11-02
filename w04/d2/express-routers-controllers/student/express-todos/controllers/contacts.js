
function form(req, res, next) {
    res.render('form');
}

function thank(req, res, next) {
    res.send('thank')
}

module.exports = {
    form,
    thank
}