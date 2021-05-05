'use strict'
const mongoose = require ('mongoose');

const mongostring_URI = 'mongodb://localhost:task'

mongoose.connect(mongostring_URI, {

    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('conectado'))
    .catch( err =>  console.log(err));