const todo = require('../models/todo');


function index(req, res) {
    res.render('todos/index', {
        todos: todo.getAll()
    });
}


module.exports = {
    index:index
};