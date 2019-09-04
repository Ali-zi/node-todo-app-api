const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5d5c9282fe837507acd92596';

// var id = '5d6dcd4d02ea501bfccd11f511';

// if(!ObjectID.isValid(id)){
//     return console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos ', todos);

// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo ', todo);
// });


// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo byID ', todo);
// }).catch((e) => console.log(e));


// User.find({
//     _id: id
// }).then((users) => {
//     console.log('users' , users);
// });

User.findById(id).then((user) => {
    if(!user) {
       console.log('User undefined');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
