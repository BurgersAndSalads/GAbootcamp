var Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
  });
}

function newTodo(req, res) {
  res.render('todos/new');
}

function create(req, res) {
  Todo.create(req.body);
  res.redirect('/todos');
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}

function edit(req, res) {
  Todo.edit(req.params.id);
  res.render('todos/edit', {
    todo: Todo.edit() 
  });
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit
};