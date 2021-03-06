var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose'); // this is equal to saying var mongoose = require('./db/mongoose').mongoose
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
      //  console.log(doc);

    }, (err) => {
       // console.log(err);
        res.status(400).send(err);

    });

});

app.get('/todos', (req, res) => {
    
    Todo.find().then((todos) => {
        res.send({todos});

    }, (e) => {
        res.status(400).send(e);

    });
});


app.get('/todos/:id', (req, res) => {

    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send("ID is a no go");
    }

    // valdiate id 
    //if invalid responde iwth 404
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(400).send('no todo with this id');
        } 
        res.send({todo, yolo:'man this is another object '});
    }, (e) => {
        res.status(400).send(e);
    }); 
});


// get /todos/id


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app}; // equal to module.exports = {app:app}















// var userSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   }
// });



// var newUser = new User({
//     email: "heliss78@gmail.com"
// });

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc));
// }, (err) => {
//     console.log('Unable to add user ', err);

// });
//user email, required, trim, set type to string, min length of 1


// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// var otherTodo = new Todo({
//     text: 25
// });
// newTodo.save().then((doc) => {
//     console.log('Saved todo ', doc);

// }, (err) => {
//     console.log('unable to save to do ', err);
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));

// }, (err) => {
//     console.log('Failed to created to record' , err);

// });
