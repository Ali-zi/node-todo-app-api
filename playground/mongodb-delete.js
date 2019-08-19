// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('ToDoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result => {
    //     console.log(result.result);
    // }))

    //findOnAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
 
    // db.collection('Users').deleteMany({name: 'Ali'}).then((result) => {
    //     console.log(result.result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5d5af9e6a2e4af08388531b2') }).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });
    client.close();
});



//destrucruting example
// var user = {name: 'Ali', age: 25};
// var {name} = user;
// console.log(name);
