const Puppy = require('../../models/puppies');

function index(req, res) {
    Puppy.find({}, function(err, puppies) {
        res.status(200).json(puppies);
    });
}

function show(req, res) {
    
}

function create(req, res) {

}

function update(req, res) {

}

function puppydelete(req, res) {

}

module.exports = {
    index,
    show,
    create,
    update,
    delete: puppydelete
}