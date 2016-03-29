var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test3');
var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now },
});
var Todo = mongoose.model('Todo', TodoSchema);

//CREATE
Todo.create({name: 'Master Javscript', completed: true, note: 'Getting better everyday'}, function(err, todo){
    if(err) console.log(err);
    else console.log(todo);
});

//READ
Todo.find(function (err, todos) {
    if (err) return console.error(err);
    console.log(todos)
});
//With query
Todo.find({completed: true }, (function (err, todos) {
    if (err) return console.error(err);
    console.log(todos));

//UPDATE
// Model.update(conditions/query, update, [options], [callback])
// updated 'completed: false' docs to 'completed: true'.

Todo.update({ completed: false }, { completed: true }, { multi: true }, callback);

//DELETE

Todo.remove({completed: true}, callback);
