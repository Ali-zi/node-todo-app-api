// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('ToDoApp');

    // db.collection('Todos').find({
    //     _id:new ObjectID('5d5a0386bfc7982d787ae048')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err)=> {
    //     console.log('Unable to fetch to dos ' , err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count: ' , count);

    // }, (err)=> {
    //     console.log('Unable to fetch to dos ' , err);
    // });

    db.collection('Users').find({name: 'Ali'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined, 2));

    }, ((err) => {
        console.log(err);
    }));
 
    client.close();
});



//destrucruting example
// var user = {name: 'Ali', age: 25};
// var {name} = user;
// console.log(name);
