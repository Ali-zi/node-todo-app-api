// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');
    // const db = client.db('ToDoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {

    //     if(err){
    //         return console('Unable to insert Todo, ' , err);
    //     }

    //     console.log(JSON.stringify(result.ops));

    // });



    // db.collection('Users').insertOne({
    //     name: 'Ali',
    //     age: '29',
    //     location: 'Ottawack'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unabel to insert document into user collection', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // })
    // client.close();
});



//destrucruting example
// var user = {name: 'Ali', age: 25};
// var {name} = user;
// console.log(name);
