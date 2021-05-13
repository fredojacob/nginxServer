const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    codigo: {
        type: String,
        required: true
    },
    nombre: {

        type: String,
        require: true,
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('post', PostSchema);