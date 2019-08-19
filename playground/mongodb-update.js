// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to Connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('ToDoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5d5b1b72363907aea5130ead')
    // },
    // {
    //     $set: {
    //         completed: true
    //     }

    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);

    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5d5af9d915a81b11acca282b')
    }, {
        $set: {
            name: 'Ali'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});



//destrucruting example
// var user = {name: 'Ali', age: 25};
// var {name} = user;
// console.log(name);
