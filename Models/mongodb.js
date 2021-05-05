'use strict'
const mongoose = require('mongoose');

const mongostring_URI = 'mongodb+srv://fgonzalez:admin2021@fghack.lqbrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const connectBD = async () => {

    await mongoose.connect(mongostring_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('conectado a mongo perfectamente');
};

module.exports = connectBD;