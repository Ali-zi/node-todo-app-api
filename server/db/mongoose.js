var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});


module.exports = {
    mongoose
};

//can be re written as module.exports = { mongoose: mongoose} but we got es6 so if vars name are the same no need to indicate twice